export class PositionFound {
  static readonly type = '[Position] Found';
  constructor(public payload: Position) {}
}
export class PositionOther {
  static readonly type = '[Position] Other';
  constructor(public payload: Position) {}
}

export class StartLocating {
  static readonly type = '[Locating] start';
}
export class StopLocating {
  static readonly type = '[Locating] stop';
}
