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

  private locationWatchId = null;
  public error = false;
  private location = null;

  constructor(
    protected mapService: MapService,
    private messageService: MessageService
  ) { }

  startWatchingLocation() {
    if (this.locationWatchId === null) {
      this.locationWatchId = navigator.geolocation.watchPosition(this.newLocationCallback, this.errorLocationCallback, geolocationOptions);
    }

    if (this.locationWatchId === null) {
      this.errorLocation({message: 'Cannot watch location!'});
    }

    window.onclose = this.stopWatchingLocation;
  }

  stopWatchingLocation() {
    console.log('Stop ' + this.locationWatchId);
    if (this.locationWatchId != null) {
      navigator.geolocation.clearWatch(this.locationWatchId);
      this.locationWatchId = null;
    }
  }

  private newLocationCallback = (location) => {
    this.gotNewLocation(location);
  }

  private gotNewLocation(location) {
    this.location = location;
    this.mapService.showMeOnMap(location, true);
  }

  private errorLocationCallback = (error) => {
    this.errorLocation(error);
  }

  private errorLocation(error) {
    console.log(error);
    this.messageService.clear();
    this.messageService.add({
      severity: 'error',
      summary: 'Error while locating',
      detail: error.message
    });
    this.stopWatchingLocation();
  }

  getLocation() {
    return this.location;
  }

  isWatchingLocation() {
    return this.locationWatchId != null;
  }

  hasLocation() {
    return this.location != null;
  }
}
