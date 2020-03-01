import {createAction, props} from '@ngrx/store';

export const positionFound = createAction('[Position] Found', props<{ lat: number; lng: number, acc: number }>());
export const positionOther = createAction('[Position] Other', props<{ lat: number; lng: number, acc: number }>());
export const locatingStart = createAction('[Locating] start');
export const locatingStop = createAction('[Locating] stop');
