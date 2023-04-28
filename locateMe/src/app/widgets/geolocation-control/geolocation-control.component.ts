import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  StartLocating,
  StopLocating,
} from 'src/app/store/actions/position.actions';
import { GeolocationState } from 'src/app/store/states/app.state';

@Component({
  selector: 'app-geolocation-control',
  templateUrl: './geolocation-control.component.html',
})
export class GeolocationControlComponent {

  @Select(GeolocationState.locationWatchId)
  locationWatchId$!: Observable<unknown>;

  constructor(
      private store: Store,
  ) { }

  locateMe() {
    this.store.dispatch(new StartLocating());
  }

  stopLocatingMe() {
    this.store.dispatch(new StopLocating());
  }
}
