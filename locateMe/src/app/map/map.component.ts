import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {SEP_CHAR} from '../service/linkGenerator.service';
import {combineLatest, Observable, Subject} from 'rxjs';
import {Circle, LatLng, LatLngBoundsExpression, Map, Marker, tileLayer} from 'leaflet';
import {meOptions, otherOptions, PersonOptions, PositionMarker} from '../common';
import {LeafletControlLayersConfig} from '@asymmetrik/ngx-leaflet';
import {Select, Store} from '@ngxs/store';
import {Geolocation, GeolocationState, MePositionState, OtherPositionState} from '../store/states/app.state';
import {PositionOther, StartLocating, StopLocating} from '../store/actions/position.actions';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit, OnDestroy {

  hidden = true;

  @Select(GeolocationState)
  isWatchingLocation$!: Observable<Geolocation>;
  @Select(MePositionState)
  positionMe$!: Observable<GeolocationPosition>;
  @Select(OtherPositionState)
  positionOther$!: Observable<GeolocationPosition>;

  layersControl: LeafletControlLayersConfig = {
    baseLayers: {
      'OSM Mapnik B&W':
        tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
          {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),
      'OSM Mapnik':
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),
      'Carto Light':
        tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
          {attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL'}),
      'Wikimedia Maps':
        tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png',
          {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),
    },
    overlays: {},
  };

  private me: PositionMarker = MapComponent.forgePositionMarker(meOptions);
  private other: PositionMarker = MapComponent.forgePositionMarker(otherOptions);

  private onDestroy$: Subject<boolean> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private store: Store,
  ) {
  }

  private static forgePositionMarker(options: PersonOptions): PositionMarker {
    return {
      marker: new Marker(new LatLng(0, 0), {icon: options.icon, opacity: 0}),
      accuracy: new Circle(new LatLng(0, 0), 0, {...options.accuracyOptions, opacity: 0}),
    };
  }

  private static parseFragment(fragment: string): GeolocationPosition {
    const fragments = fragment.split(SEP_CHAR);
    return {
      coords: {
        latitude: Number(fragments[0]),
        longitude: Number(fragments[1]),
        accuracy: Number(fragments[2]),
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null,
      },
      timestamp: new Date().getTime(),
    };
  }

  ngOnInit() {
    this.positionMe$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((me: GeolocationPosition) => this.applyPosition(this.me, me));

    this.positionOther$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((other: GeolocationPosition) => this.applyPosition(this.other, other));

    this.route.fragment
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((fragment) => {
        if (fragment && fragment.length > 0) {
          this.store.dispatch(new PositionOther(MapComponent.parseFragment(fragment)));
        }
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  locateMe() {
    this.store.dispatch(new StartLocating());
  }

  stopLocatingMe() {
    this.store.dispatch(new StopLocating());
  }

  onMapReady(map: Map) {
    map.addLayer(this.layersControl.baseLayers[localStorage.getItem('baseLayer') || 'Wikimedia Maps']);

    // Add the markers
    map.addLayer(this.me.marker)
      .addLayer(this.me.accuracy);
    map.addLayer(this.other.marker)
      .addLayer(this.other.accuracy);

    map.on({
      baselayerchange: event => localStorage.setItem('baseLayer', event.name),
    });

    // Register pan-and-zoom on location changes
    combineLatest([
      this.positionMe$,
      this.positionOther$,
    ])
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(([me, other]: [GeolocationPosition, GeolocationPosition]) => {
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
  }

  private applyPosition(positionMarker: PositionMarker, position: GeolocationPosition): void {
    if (!position?.coords) {
      return;
    }

    this.hidden = false;

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
