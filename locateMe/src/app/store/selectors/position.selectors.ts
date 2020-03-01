import {createFeatureSelector} from '@ngrx/store';
import {AppState, GeolocationState, Position} from '../states/app.state';

export const selectMe = createFeatureSelector<AppState, Position>('me');
export const selectOther = createFeatureSelector<AppState, Position>('other');
export const selectLocating = createFeatureSelector<AppState, GeolocationState>('locating');
