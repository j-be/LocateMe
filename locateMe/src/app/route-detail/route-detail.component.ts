import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  MePositionState,
  PublicTransportState,
} from '../store/states/app.state';
import { Observable, take, filter } from 'rxjs';
import { ClearTrip } from '../store/actions/position.actions';
import { Router } from '@angular/router';
import { Geolocation } from '../common';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.sass'],
  standalone: false,
})
export class RouteDetailComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly router = inject(Router);

  origin$: Observable<Geolocation>;
  tripDetail$: Observable<any>;

  constructor() {
    this.origin$ = this.store.select(MePositionState.getState);
    this.tripDetail$ = this.store.select(PublicTransportState.trip);
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
