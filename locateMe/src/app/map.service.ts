import { Injectable } from '@angular/core';
import * as L from 'leaflet';

class PersonOptions {
  constructor(public icon: L.icon, public accuracyOptions) { }
}

const meOptions = new PersonOptions(
  L.icon({
    iconUrl: 'assets/css/img/location-pin-me.svg',

    iconSize: [38, 38], // size of the icon
    iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
  }),
  {
    color: '#007CC4',
    fillColor: '#007CC4',
    fillOpacity: 0.5,
    radius: 0
  }
);

const otherOptions = new PersonOptions(
  L.icon({
    iconUrl: 'assets/css/img/location-pin-other.svg',

    iconSize: [38, 38], // size of the icon
    iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
  }),
  {
    color: '#74BF45',
    fillColor: '#74BF45',
    fillOpacity: 0.5,
    radius: 0
  }
);

class Person {
  private marker: L.marker;
  private accuracy: L.circle;
  public location: L.latLon;

  constructor(map, locationRaw, options: PersonOptions) {
    this.location = MapService.toLeaflet(locationRaw);
    this.marker = L.marker(this.location, {icon: options.icon}).addTo(map);
    this.accuracy = L.circle(this.location, options.accuracyOptions).addTo(map);
    this.accuracy.setRadius(locationRaw.coords.accuracy);
  }

  setLocation(locationRaw) {
    const location: L.latLon = MapService.toLeaflet(locationRaw);

    this.location = location;
    this.marker.setLatLng(location);
    this.marker.update();
    this.accuracy.setLatLng(location);
    this.accuracy.setRadius(locationRaw.coords.accuracy);
  }
}

const osmDataAttribution = 'Data &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';

export class TileLayer {
  constructor(
    public id,
    public name,
    public url,
    public attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors') { }
}

export const tileLayers = [
  new TileLayer(
    0,
    'HOT',
    'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    `${osmDataAttribution}, Tiles &copy; HOT`),
  new TileLayer(
    1,
    'OSM Mapnik B&W',
    'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'),
  new TileLayer(2,
    'OSM Mapnik',
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
  new TileLayer(
    3,
    'Carto Light',
    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL'),
  new TileLayer(
    4,
    'Wikimedia Maps',
    'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png')
];

@Injectable()
export class MapService {
  private map: L.Map;
  private me: Person;
  private other: Person;
  private tileLayer: L.layer = tileLayers[0];

  public showMap = false;

  static toLeaflet(location) {
    return L.latLng(location.coords.latitude, location.coords.longitude);
  }

  init(container) {
    // create a map in the "map" div
    this.map = L.map(container, {
      center: [0, 0],
      zoom: 15
    });
    this.setTileLayer(this.tileLayer);
  }

  showMeOnMap(location, enablePan) {
    if (!this.me) {
      this.me = new Person(this.map, location, meOptions);
    } else {
      this.me.setLocation(location);
    }

    this.showMap = true;

    if (this.other) {
      this.map.fitBounds(L.latLngBounds(this.me.location, this.other.location));
      return;
    }

    if (enablePan) {
      this.map.panTo(this.me.location);
    }
  }

  showOtherOnMap(location, enablePan) {
    if (!this.other) {
      this.other = new Person(this.map, location, otherOptions);
    } else {
      this.other.setLocation(location);
    }

    if (enablePan) {
      this.map.panTo(this.other.location);
    }

    this.showMap = true;
  }

  getMe() {
    return this.me;
  }

  getOther() {
    return this.other;
  }

  getTileLayer() {
    return this.tileLayer;
  }

  setTileLayer(tileLayer: TileLayer) {
    console.log('Setting tileLayer', tileLayer);

    if (this.tileLayer != null) {
      this.map.removeLayer(this.tileLayer);
    }
    // add an OpenStreetMap tile layer
    this.tileLayer = L.tileLayer(tileLayer.url, {
      attribution: tileLayer.attribution
    });
    this.tileLayer.addTo(this.map);
  }
}
