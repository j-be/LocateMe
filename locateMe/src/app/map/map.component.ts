import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeafletControlLayersConfig } from '@asymmetrik/ngx-leaflet';
import { Select } from '@ngxs/store';
import {
  Circle,
  LatLng,
  LatLngBoundsExpression,
  Map,
  Marker,
  tileLayer,
} from 'leaflet';
import {
  combineLatest,
  filter,
  Observable,
  Subject,
  take,
  takeUntil,
} from 'rxjs';
import {
  meOptions,
  otherOptions,
  PersonOptions,
  PositionMarker,
} from '../common';
import { MePositionState, OtherPositionState } from '../store/states/app.state';


const DEFAULT_LAYER = 'Wikimedia Maps';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit, OnDestroy {

  @Select(MePositionState)
  positionMe$!: Observable<GeolocationPosition>;
  @Select(OtherPositionState)
  positionOther$!: Observable<GeolocationPosition>;

  layersControl: LeafletControlLayersConfig = {
    baseLayers: {
      'OSM Mapnik':
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),
      'Carto Light':
        tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
          {attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL'}),
      'Wikimedia Maps':
        tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png',
          {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),
      'CartoDB Voyager':
        tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	        subdomains: 'abcd'}),
    },
    overlays: {},
  };

  private map: Map | null = null;

  private me = MapComponent.forgePositionMarker(meOptions);
  private other = MapComponent.forgePositionMarker(otherOptions);

  private mapResized$: Subject<number> = new Subject();
  private onDestroy$: Subject<boolean> = new Subject();

  constructor(
    private router: Router,
  ) {
  }

  private static forgePositionMarker(options: PersonOptions): PositionMarker {
    return {
      marker: new Marker(new LatLng(0, 0), {icon: options.icon, opacity: 0}),
      accuracy: new Circle(new LatLng(0, 0), 0, {...options.accuracyOptions, opacity: 0}),
    };
  }

  ngOnInit() {
    combineLatest([
      this.positionMe$,
      this.positionOther$,
    ]).pipe(
      take(1),
      filter(positions => positions.every(position => !position)),
    ).subscribe(() => { this.router.navigate(['/']).catch((err) => console.error("Failed to navigate", err)) });

    this.positionMe$.pipe(
      takeUntil(this.onDestroy$),
    ).subscribe((me: GeolocationPosition) => this.applyPosition(this.me, me));
    this.positionOther$.pipe(
      takeUntil(this.onDestroy$),
    ).subscribe((other: GeolocationPosition) => this.applyPosition(this.other, other));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  onMapReady(map: Map) {
    map.addLayer(this.layersControl.baseLayers[localStorage.getItem('baseLayer') || DEFAULT_LAYER] ||
      this.layersControl.baseLayers[DEFAULT_LAYER]);

    // Add the markers
    map.addLayer(this.me.marker)
      .addLayer(this.me.accuracy)
      .addLayer(this.other.marker)
      .addLayer(this.other.accuracy);

    map.on({
      baselayerchange: event => localStorage.setItem('baseLayer', event.name),
    });

    // Register pan-and-zoom on location changes
    combineLatest([
      this.positionMe$,
      this.positionOther$,
    ]).pipe(
      takeUntil(this.onDestroy$),
    ).subscribe(([me, other]: [GeolocationPosition, GeolocationPosition]) => {
      if (!me && !other) {
        return;
      } else if (!me && other) {
        map.setView(this.toLeafletLatLng(other), 18);
      } else if (me && !other) {
        map.setView(this.toLeafletLatLng(me), 18);
      } else {
        map.fitBounds(this.toLeafletLatLngBound(me, other));
      }
    });

    this.map = map;
    this.mapResized$.next(0);
  }

  private applyPosition(positionMarker: PositionMarker, position: GeolocationPosition): void {
    if (!position?.coords) {
      return;
    }

    const latLng = this.toLeafletLatLng(position);
    positionMarker.marker.setOpacity(1);
    positionMarker.marker.setLatLng(latLng);
    positionMarker.accuracy.setStyle({opacity: 1});
    positionMarker.accuracy.setLatLng(latLng);
    positionMarker.accuracy.setRadius(position.coords.accuracy);
  }

  private toLeafletLatLng(position: GeolocationPosition): LatLng {
    return new LatLng(position.coords.latitude, position.coords.longitude);
  }

  private toLeafletLatLngBound(first: GeolocationPosition, second: GeolocationPosition): LatLngBoundsExpression {
    return [[first.coords.latitude, first.coords.longitude], [second.coords.latitude, second.coords.longitude]];
  }
}
