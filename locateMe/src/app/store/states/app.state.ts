import {Action, State, StateContext, Store} from '@ngxs/store';
import {PositionFound, PositionOther, StartLocating, StopLocating} from '../actions/position.actions';
import {geolocationOptions} from '../../common';
import {MessageService} from 'primeng/api';
import {Injectable} from '@angular/core';

const MSG_LOCATING = 'locating';

export interface Position {
  lat: number;
  lng: number;
  acc: number;
}

export interface Geolocation {
  locationWatchId: number;
}

@State<Position>({
  name: 'MyPositionState',
  defaults: null,
})
@Injectable()
export class MePositionState {

  constructor(
    private messageService: MessageService,
  ) { }

  @Action(PositionFound)
  positionOther(ctx: StateContext<Position>, positionFound: PositionFound) {
    ctx.setState({
      ...positionFound.payload,
    });
    this.messageService.clear(MSG_LOCATING);
  }
}

@State<Position>({
  name: 'OtherPositionState',
  defaults: null,
})
@Injectable()
export class OtherPositionState {
  @Action(PositionOther)
  positionOther(ctx: StateContext<Position>, positionOther: PositionOther) {
    ctx.setState({
      ...positionOther.payload,
    });
  }
}

@State<Geolocation>({
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


  @Action(StartLocating)
  startLocating(ctx: StateContext<Geolocation>, _: StartLocating) {
    const state = ctx.getState();

    if (state.locationWatchId != null) {
      // Already running I guess...
      return;
    }

    const locationWatchId = navigator.geolocation.watchPosition(newLocation => {
        this.messageService.clear(MSG_LOCATING);
        this.store.dispatch(new PositionFound({
          lat: newLocation.coords.latitude,
          lng: newLocation.coords.longitude,
          acc: newLocation.coords.accuracy
        }));
      },
      error => this.errorLocation(error),
      geolocationOptions);

    this.messageService.clear();
    this.messageService.add({
      id: MSG_LOCATING,
      severity: 'info',
      summary: 'Locating',
      detail: 'This might take a bit...',
      sticky: true,
    });

    if (locationWatchId === null) {
      this.errorLocation({message: 'Cannot watch location!'});
    }

    ctx.setState({
      locationWatchId,
    });
  }

  @Action(StopLocating)
  stopLocating(ctx: StateContext<Geolocation>, _: StopLocating) {
    const state = ctx.getState();

    if (state.locationWatchId != null) {
      navigator.geolocation.clearWatch(state.locationWatchId);
    }

    ctx.setState({
      locationWatchId: null,
    });
    this.messageService.clear(MSG_LOCATING);
  }

  private errorLocation(error): void {
    this.messageService.clear();
    this.messageService.add({
      severity: 'error',
      summary: 'Error while locating',
      detail: error.message
    });
    this.store.dispatch(new StopLocating());
  }
}
