import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable, take } from 'rxjs';
import {
  MePositionState,
  OtherPositionState,
  PublicTransportModel,
  PublicTransportState,
} from '../store/states/app.state';
import { Store } from '@ngxs/store';
import {
  FetchTrips,
  SetTrip,
  StopLocating,
} from '../store/actions/position.actions';
import { Geolocation } from '../common';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.sass'],
  standalone: false,
})
export class RouteComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  origin$: Observable<Geolocation>;
  destination$: Observable<Geolocation>;
  routes$: Observable<PublicTransportModel>;
  fetching$: Observable<boolean>;

  constructor() {
    this.origin$ = this.store.select(MePositionState.getState);
    this.destination$ = this.store.select(OtherPositionState.getState);
    this.routes$ = this.store.select(PublicTransportState.getState);
    this.fetching$ = this.store.select(PublicTransportState.fetching);
  }

  ngOnInit(): void {
    this.store.dispatch(new StopLocating());

    combineLatest([this.origin$, this.destination$]).pipe(
      take(1),
    ).subscribe(([origin, destination]) => {
      if (origin && destination)
        this.store.dispatch(new FetchTrips(origin, destination));
      else
        this.router.navigate(['/'])
    });
  }

  showDetails(trip: any) {
    this.store.dispatch(new SetTrip(trip));
    this.router.navigate(['detail'], { relativeTo: this.activatedRoute });
  }

  formatPoint(point: any) {
    return point.dateTime.time + ' ' + point.name;
  }
}
