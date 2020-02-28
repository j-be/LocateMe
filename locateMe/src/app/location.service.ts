import {Injectable} from '@angular/core';
import {MapService} from './map.service';
import {MessageService} from 'primeng/api';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 300000,
  maximumAge: 60000
};

@Injectable()
export class LocationService {

  private locationWatchId: number = null;
  public error = false;
  private location: Position = null;

  constructor(
    protected mapService: MapService,
    private messageService: MessageService
  ) { }

  startWatchingLocation(): void {
    if (this.locationWatchId === null) {
      this.locationWatchId = navigator.geolocation.watchPosition(
        newLocation => this.gotNewLocation(newLocation),
        error => this.errorLocation(error),
        geolocationOptions);
    }

    if (this.locationWatchId === null) {
      this.errorLocation({message: 'Cannot watch location!'});
    }

    window.onclose = this.stopWatchingLocation;
  }

  stopWatchingLocation(): void {
    console.log('Stop ' + this.locationWatchId);
    if (this.locationWatchId != null) {
      navigator.geolocation.clearWatch(this.locationWatchId);
      this.locationWatchId = null;
    }
  }

  private gotNewLocation(location): void {
    this.location = location;
    this.mapService.showMeOnMap(location, true);
  }

  private errorLocation(error): void {
    console.log(error);
    this.messageService.clear();
    this.messageService.add({
      severity: 'error',
      summary: 'Error while locating',
      detail: error.message
    });
    this.stopWatchingLocation();
  }

  getLocation(): Position {
    return this.location;
  }

  isWatchingLocation(): boolean {
    return this.locationWatchId != null;
  }

  hasLocation(): boolean {
    return this.location != null;
  }
}
