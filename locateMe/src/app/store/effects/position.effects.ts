import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {LocationService} from '../../service/location.service';
import {locatingStart, locatingStop} from '../actions/position.actions';
import {pipe} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class PositionEffects {

  constructor(
    private actions$: Actions,
    private locationService: LocationService,
  ) {}

  startLocating$ = createEffect(() => this.actions$.pipe(
    ofType(locatingStart),
    pipe(tap(() => this.locationService.startWatchingLocation())),
  ), {dispatch: false});

  stopLocating$ = createEffect(() => this.actions$.pipe(
    ofType(locatingStop),
    pipe(tap(() => this.locationService.stopWatchingLocation()))
  ), {dispatch: false});
}
