import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {SEP_CHAR} from '../service/linkGenerator.service';
import {Observable, Subject} from 'rxjs';
import {Circle, LatLng, Map, MapOptions, Marker, tileLayer} from 'leaflet';
import {Store} from '@ngrx/store';
import {AppState, GeolocationState, Position} from '../store/states/app.state';
import {locatingStart, locatingStop, positionFound, positionOther} from '../store/actions/position.actions';
import {selectLocating, selectMe, selectOther} from '../store/selectors/position.selectors';
import {meOptions, otherOptions, PersonOptions, PositionMarker} from '../common';
import {LeafletControlLayersConfig} from '@asymmetrik/ngx-leaflet';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.styl']
})
export class MapComponent implements OnInit, OnDestroy {

  map: Map = null;
  isWatchingLocation$: Observable<GeolocationState>;
  hidden = true;

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
    private store: Store<AppState>,
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

    this.store.select(selectMe)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((me: Position) => this.applyPosition(this.me, me));

    this.store.select(selectOther)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((other: Position) => this.applyPosition(this.other, other));

    this.route.fragment
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((fragment) => {
        if (fragment && fragment.length > 0) {
          this.store.dispatch(positionOther(MapComponent.parseFragment(fragment)));
        }
      });

    this.isWatchingLocation$ = this.store.select(selectLocating);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  locateMe() {

    if (!environment.production) {
      this.store.dispatch(positionFound({lat: 48, lng: 16, acc: 12}));
    } else {
      this.store.dispatch(locatingStart());
    }
  }

  stopLocatingMe() {
    this.store.dispatch(locatingStop());
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
    this.store
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((state: AppState) => {
        if (!state.me && !state.other) {
          return;
        } else if (!state.me && state.other) {
          this.map.setView(new LatLng(state.other.lat, state.other.lng), 18);
        } else if (state.me && !state.other) {
          this.map.setView(new LatLng(state.me.lat, state.me.lng), 18);
        } else {
          this.map.fitBounds([[state.me.lat, state.me.lng], [state.other.lat, state.other.lng]]);
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
