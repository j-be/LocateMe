import { Circle, CircleOptions, Icon, LocateOptions, Marker } from 'leaflet';

export interface PositionMarker {
  marker: Marker;
  accuracy: Circle;
}

export interface PersonOptions {
  readonly icon: Icon;
  readonly accuracyOptions: CircleOptions;
}

export interface Geolocation {
  readonly coords: {
    readonly latitude: number,
    readonly longitude: number,
    readonly accuracy: number,
  }
  readonly timestamp: EpochTimeStamp;
}

export const meOptions = {
  icon: new Icon({
    iconUrl: 'css/img/location-pin-me.svg',

    iconSize: [38, 38], // size of the icon
    iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
  }),
  accuracyOptions: {
    color: '#007CC4',
    fillColor: '#007CC4',
    fillOpacity: 0.5,
    radius: 0,
  },
};

export const otherOptions = {
  icon: new Icon({
    iconUrl: 'css/img/location-pin-other.svg',

    iconSize: [38, 38], // size of the icon
    iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
  }),
  accuracyOptions: {
    color: '#74BF45',
    fillColor: '#74BF45',
    fillOpacity: 0.5,
    radius: 0,
  },
};

export const geolocationOptions: LocateOptions = {
  enableHighAccuracy: true,
  timeout: 300000,
  maximumAge: 60000,
  watch: true,
};

export function forgeGeolocation(latitude: number, longitude: number, accuracy: number): Geolocation {
  return {
    coords: {
      latitude,
      longitude,
      accuracy,
    },
    timestamp: Date.now(),
  };
}
