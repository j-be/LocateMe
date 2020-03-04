import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';
import {geolocationOptions} from '../common';
import {Store} from '@ngrx/store';
import {AppState} from '../store/states/app.state';
import {locatingStop, positionFound} from '../store/actions/position.actions';
import {selectLocating} from '../store/selectors/position.selectors';

const MSG_LOCATING = 'locating';

@Injectable()
export class LocationService {

  private locationWatchId: number = null;
  public error = false;

  constructor(
    protected store: Store<AppState>,
    private messageService: MessageService
  ) {
    this.store.select(selectLocating)
      .subscribe(geolocationState => {
        if (geolocationState.locating) {
          this.startWatchingLocation();
        } else {
          this.stopWatchingLocation();
        }
      });
  }

  startWatchingLocation(): void {
    if (this.locationWatchId === null) {
      this.locationWatchId = navigator.geolocation.watchPosition(newLocation => {
          this.messageService.clear(MSG_LOCATING);
          this.store.dispatch(positionFound({
            lat: newLocation.coords.latitude,
            lng: newLocation.coords.longitude,
            acc: newLocation.coords.accuracy
          }));
        },
        error => this.errorLocation(error),
        geolocationOptions);
    }

    this.messageService.clear();
    this.messageService.add({
      severity: 'info',
      summary: 'Locating',
      detail: 'This might take a bit...',
      sticky: true,
      id: MSG_LOCATING,
    });

    if (this.locationWatchId === null) {
      this.errorLocation({message: 'Cannot watch location!'});
    }

    window.onclose = this.stopWatchingLocation;
  }

  stopWatchingLocation(): void {
    if (this.locationWatchId != null) {
      navigator.geolocation.clearWatch(this.locationWatchId);
      this.locationWatchId = null;
    }
    this.messageService.clear(MSG_LOCATING);
  }

  private errorLocation(error): void {
    this.messageService.clear();
    this.messageService.add({
      severity: 'error',
      summary: 'Error while locating',
      detail: error.message
    });
    this.store.dispatch(locatingStop());
  }
}
