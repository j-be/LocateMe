import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {SEP_CHAR} from '../service/linkGenerator.service';
import {combineLatest, Observable, Subject} from 'rxjs';
import {Circle, LatLng, Map, MapOptions, Marker, tileLayer} from 'leaflet';
import {meOptions, otherOptions, PersonOptions, PositionMarker} from '../common';
import {LeafletControlLayersConfig} from '@asymmetrik/ngx-leaflet';
import {environment} from '../../environments/environment';
import {Select, Store} from '@ngxs/store';
import {Geolocation, GeolocationState, MePositionState, OtherPositionState, Position} from '../store/states/app.state';
import {PositionFound, PositionOther, StartLocating, StopLocating} from '../store/actions/position.actions';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.styl']
})
export class MapComponent implements OnInit, OnDestroy {

  map: Map = null;
  hidden = true;

  @Select(GeolocationState)
  isWatchingLocation$: Observable<Geolocation>;
  @Select(MePositionState)
  positionMe$: Observable<Position>;
  @Select(OtherPositionState)
  positionOther$: Observable<Position>;

  options: MapOptions = null;
  layersControl: LeafletControlLayersConfig = {
    baseLayers: {
      HOT:
        tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
          {
            attribution: 'Data &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors Tiles &copy; HOT',
            maxZoom: 15,
          }),
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

  private static parseFragment(fragment: string): Position {
    const fragments = fragment.split(SEP_CHAR);
    return {lat: Number(fragments[0]), lng: Number(fragments[1]), acc: Number(fragments[2])};
  }

  ngOnInit() {
    this.options = {
      layers: [this.layersControl.baseLayers[localStorage.getItem('baseLayer')] || this.layersControl.baseLayers['Wikimedia Maps']],
    };

    this.positionMe$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((me: Position) => this.applyPosition(this.me, me));

    this.positionOther$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((other: Position) => this.applyPosition(this.other, other));

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
    this.map = map;

    // Add the markers
    this.map.addLayer(this.me.marker)
      .addLayer(this.me.accuracy);
    this.map.addLayer(this.other.marker)
      .addLayer(this.other.accuracy);

    this.map.on({
      baselayerchange: event => localStorage.setItem('baseLayer', event.name),
    });

    // Register pan-and-zoom on location changes
    combineLatest([
      this.positionMe$,
      this.positionOther$,
    ])
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(([me, other]: [Position, Position]) => {
        if (!me && !other) {
          return;
        } else if (!me && other) {
          this.map.setView(new LatLng(other.lat, other.lng), 18);
        } else if (me && !other) {
          this.map.setView(new LatLng(me.lat, me.lng), 18);
        } else {
          this.map.fitBounds([[me.lat, me.lng], [other.lat, other.lng]]);
        }
      });
  }

  private applyPosition(positionMarker: PositionMarker, position: Position): void {
    if (!position) {
      return;
    }

    this.hidden = false;

    const latLng = new LatLng(position.lat, position.lng);
    positionMarker.marker.setOpacity(1);
    positionMarker.marker.setLatLng(latLng);
    positionMarker.accuracy.setStyle({opacity: 1});
    positionMarker.accuracy.setLatLng(latLng);
    positionMarker.accuracy.setRadius(position.acc);
  }
}
