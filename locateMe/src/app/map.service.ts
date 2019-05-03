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
    fillOpacity: 0.5
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
    fillOpacity: 0.5
  }
);

class Person {
  private marker: L.marker;
  private accuracy: L.circle;
  public location: L.latLon;

  constructor(map, locationRaw, options: PersonOptions) {
    this.location = MapService.toLeaflet(locationRaw);
    this.marker = L.marker(this.location, {icon: options.icon}).addTo(map);
    this.accuracy = L.circle(this.location, locationRaw.coords.accuracy, options.accuracyOptions).addTo(map);
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

@Injectable()
export class MapService {
  private map: L.Map;
  private me: Person;
  private other: Person;
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

    // add an OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  showMeOnMap(location, enablePan) {
    if (!this.me) {
      this.me = new Person(this.map, location, meOptions);
    } else {
      this.me.setLocation(location);
    }

    if (enablePan) {
      this.map.panTo(this.me.location);
    }

    if (this.other) {
      this.map.fitBounds(L.latLngBounds(this.me.location, this.other.location));
    }

    this.showMap = true;
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
}
