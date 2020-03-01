import {Action, createReducer, on} from '@ngrx/store';
import {locatingStart, locatingStop, positionFound, positionOther} from '../actions/position.actions';
import {GeolocationState, Position} from '../states/app.state';

const initialPosition: Position = null;
const initialGeolocationState: GeolocationState = {locating: false};

const _meReducer = createReducer(initialPosition,
  on(positionFound, (state, position: { lat, lng, acc }) => ({...state, ...position})),
);

const _otherReducer = createReducer(initialPosition,
  on(positionOther, (state, position: { lat, lng, acc }) => ({...state, ...position})),
);

export function meLocationReducer(state: Position | undefined, action: Action) {
  return _meReducer(state, action);
}

export function otherLocationReducer(state: Position | undefined, action: Action) {
  return _otherReducer(state, action);
}

const _locatingReducer = createReducer(initialGeolocationState,
  on(locatingStart, (state => ({...state, locating: true}))),
  on(locatingStop, (state => ({...state, locating: false}))),
);

export function locatingReducer(state: GeolocationState, action: Action) {
  return _locatingReducer(state, action);
}
