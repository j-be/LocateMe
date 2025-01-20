import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  StartLocating,
  StopLocating,
} from '../../store/actions/position.actions';
import { GeolocationState } from '../../store/states/app.state';

@Component({
  selector: 'app-geolocation-control',
  templateUrl: './geolocation-control.component.html',
  standalone: false,
})
export class GeolocationControlComponent {
  private readonly store = inject(Store);

  locationWatchId$: Observable<unknown>;

  constructor() {
    this.locationWatchId$ = this.store.select(GeolocationState.locationWatchId);
   }

  locateMe() {
    this.store.dispatch(new StartLocating());
  }

  stopLocatingMe() {
    this.store.dispatch(new StopLocating());
  }
}
