import { Geolocation } from "../../common";

export class PositionFound {
  static readonly type = '[GeolocationPosition] Found';
  constructor(public payload: Geolocation
  ) {}
}
export class PositionOther {
  static readonly type = '[GeolocationPosition] Other';
  constructor(public payload: Geolocation) {}
}

export class StartLocating {
  static readonly type = '[Locating] start';
}
export class StopLocating {
  static readonly type = '[Locating] stop';
}

export class FetchTrips {
  static readonly type = '[PublicTransport] Fetch trips';
  constructor(public origin: Geolocation, public destination: Geolocation) {}
}
export class SetTrips {
  static readonly type = '[PublicTransport] Set trips';
  constructor(public trips: any[]) {}
}
export class SetTrip {
  static readonly type = '[PublicTransport] Set trip';
  constructor(public trip: any) {}
}
export class ClearTrips {
  static readonly type = '[PublicTransport] Clear trips';
}
export class ClearTrip {
  static readonly type = '[PublicTransport] Clear trip';
}
