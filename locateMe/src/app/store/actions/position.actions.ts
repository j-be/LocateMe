export class PositionFound {
  static readonly type = '[GeolocationPosition] Found';
  constructor(public payload: GeolocationPosition) {}
}
export class PositionOther {
  static readonly type = '[GeolocationPosition] Other';
  constructor(public payload: GeolocationPosition) {}
}

export class StartLocating {
  static readonly type = '[Locating] start';
}
export class StopLocating {
  static readonly type = '[Locating] stop';
}
