import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import * as Actions from '../actions/position.actions';
import { Geolocation, geolocationOptions } from '../../common';
import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';
import { WlRoutingService } from '../../service/wlRouting.service';
import { catchError, map, of } from 'rxjs';

const MSG_LOCATING = 'locating';

export interface GeolocationStateModel {
  locationWatchId: number | null;
}

@State<Geolocation | null>({
  name: 'MyPositionState',
  defaults: null,
})
@Injectable()
export class MePositionState {

  constructor(
    private messageService: MessageService,
  ) { }

  @Selector()
  static getState(state: Geolocation) {
    return state;
  }

  @Action(Actions.PositionFound)
  positionMe(ctx: StateContext<Geolocation>, action: Actions.PositionFound) {
    ctx.setState({
      coords: action.payload.coords,
      timestamp: action.payload.timestamp,
    });
    this.messageService.clear(MSG_LOCATING);
  }
}

@State<Geolocation | null>({
  name: 'OtherPositionState',
  defaults: null,
})
@Injectable()
export class OtherPositionState {

  @Selector()
  static getState(state: Geolocation) {
    return state;
  }

  @Action(Actions.PositionOther)
  positionOther(ctx: StateContext<Geolocation>, action: Actions.PositionOther) {
    ctx.setState({
      coords: action.payload.coords,
      timestamp: action.payload.timestamp,
    });
  }
}

@State<GeolocationStateModel>({
  name: 'GeolocationState',
  defaults: {
    locationWatchId: null,
  },
})
@Injectable()
export class GeolocationState {
  constructor(
    private messageService: MessageService,
    private store: Store,
  ) { }

  @Action(Actions.StartLocating)
  startLocating(ctx: StateContext<GeolocationStateModel>) {
    ctx.dispatch(new Actions.ClearTrips());

    if (ctx.getState().locationWatchId != null) {
      // Already running I guess...
      return;
    }

    const locationWatchId = navigator.geolocation.watchPosition(
      (newLocation: GeolocationPosition) => this.store.dispatch(new Actions.PositionFound(newLocation)),
      (error: GeolocationPositionError) => this.errorLocation(error),
      geolocationOptions
    );

    if (locationWatchId === null) {
      this.errorLocation({
        message: 'Cannot watch location! Is GPS activated?',
      });
      return;
    }

    this.messageService.clear();
    this.messageService.add({
      key: MSG_LOCATING,
      severity: 'info',
      summary: 'Locating',
      detail: 'This might take a bit...',
      sticky: true,
    });

    ctx.setState({
      locationWatchId,
    });

  }

  @Action(Actions.StopLocating)
  stopLocating(ctx: StateContext<GeolocationStateModel>) {
    const state = ctx.getState();

    if (state.locationWatchId != null) {
      navigator.geolocation.clearWatch(state.locationWatchId);
    }

    ctx.setState({
      locationWatchId: null,
    });
    this.messageService.clear(MSG_LOCATING);
  }

  private errorLocation(error: { message: string }): void {
    this.messageService.clear();
    this.messageService.add({
      severity: 'error',
      summary: 'Error while locating',
      detail: error.message,
    });
    this.store.dispatch(new Actions.StopLocating());
  }

  @Selector()
  static locationWatchId(state: GeolocationStateModel) {
    return state.locationWatchId;
  }
}

export interface PublicTransportModel {
  trips: any[];
  trip: any;
  fetching: boolean;
}

@State<PublicTransportModel>({
  name: 'PublicTransport',
  defaults: {
    trips: [],
    trip: null,
    fetching: false,
  },
})
@Injectable()
export class PublicTransportState {

  constructor(
    private wlRoutingService: WlRoutingService,
    private messageService: MessageService,
  ) {
  }

  @Selector()
  static getState(state: PublicTransportModel) {
    return state;
  }

  @Action(Actions.FetchTrips)
  fetchTrips(ctx: StateContext<PublicTransportModel>, action: Actions.FetchTrips) {
    ctx.patchState({ fetching: true });
    return this.wlRoutingService.getRoute(action.origin, action.destination).pipe(
      map(data => ctx.dispatch(new Actions.SetTrips(data.trips))),
      catchError(() => {
        this.messageService.add({
          severity: 'error',
          summary: 'Cannot fetch routes',
          detail: 'An error occured while fetching data from WienerLinien!'
        });
        ctx.patchState({ fetching: false });
        return of();
      })
    );
  }

  @Action(Actions.SetTrips)
  setTrips(ctx: StateContext<PublicTransportModel>, action: Actions.SetTrips) {
    ctx.setState({
      trips: action.trips,
      trip: null,
      fetching: false,
    });
  }

  @Action(Actions.SetTrip)
  setTrip(ctx: StateContext<PublicTransportModel>, action: Actions.SetTrip) {
    ctx.patchState({ trip: action.trip });
  }

  @Action(Actions.ClearTrips)
  clearTrips(ctx: StateContext<PublicTransportModel>) {
    ctx.setState({
      trips: [],
      trip: null,
      fetching: false,
    });
  }

  @Action(Actions.ClearTrip)
  clearTrip(ctx: StateContext<PublicTransportModel>) {
    ctx.patchState({
      trip: null,
    });
  }

  @Selector()
  static trip(state: PublicTransportModel) {
    return state.trip;
  }

  @Selector()
  static fetching(state: PublicTransportModel) {
    return state.fetching;
  }
}
