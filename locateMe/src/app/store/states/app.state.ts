export interface Position {
  lat: number;
  lng: number;
  acc: number;
}

export interface GeolocationState {
  locating: boolean;
}

export interface AppState {
  me: Position;
  other: Position;
  locating: GeolocationState;
}
