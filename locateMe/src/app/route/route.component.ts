import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable, take } from 'rxjs';
import {AbstractRouteComponent} from './abstract-route.component';
import {MePositionState, OtherPositionState, PublicTransportModel, PublicTransportState} from '../store/states/app.state';
import {Select, Store} from '@ngxs/store';
import {FetchTrips, SetTrip, StopLocating} from '../store/actions/position.actions';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: [
    './route.component.sass',
  ]
})
export class RouteComponent extends AbstractRouteComponent implements OnInit {

  @Select(MePositionState)
  origin$!: Observable<GeolocationPosition>;
  @Select(OtherPositionState)
  destination$!: Observable<GeolocationPosition>;
  @Select(PublicTransportState)
  routes$!: Observable<PublicTransportModel>;
  @Select(PublicTransportState.fetching)
  fetching$!: Observable<boolean>;

  constructor(
    private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    super();
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
}
