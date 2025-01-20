import { Component, OnInit } from '@angular/core';
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
})
export class RouteComponent implements OnInit {

  origin$: Observable<Geolocation> = this.store.select(MePositionState.getState);
  destination$: Observable<Geolocation> = this.store.select(OtherPositionState.getState);
  routes$: Observable<PublicTransportModel> = this.store.select(PublicTransportState.getState);
  fetching$: Observable<boolean> = this.store.select(PublicTransportState.fetching);

  constructor(
    private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
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
