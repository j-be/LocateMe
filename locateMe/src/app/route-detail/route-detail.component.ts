import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  MePositionState,
  PublicTransportState,
} from '../store/states/app.state';
import { Observable, take, filter } from 'rxjs';
import { ClearTrip } from '../store/actions/position.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.sass'],
})
export class RouteDetailComponent implements OnInit, OnDestroy {

  origin$: Observable<GeolocationPosition> = this.store.select(MePositionState.getState);
  tripDetail$: Observable<any> = this.store.select(PublicTransportState.trip);

  constructor(
    private store: Store,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.origin$.pipe(
      take(1),
      filter(origin => !origin),
    ).subscribe(() => { this.router.navigate(['/']).catch((err) => console.error("Failed to navigate", err)) });
  }

  ngOnDestroy() {
    this.store.dispatch(new ClearTrip());
  }
}
