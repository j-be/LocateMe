import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractRouteComponent } from '../route/abstract-route.component';
import { Select, Store } from '@ngxs/store';
import { MePositionState, PublicTransportState } from '../store/states/app.state';
import { Observable, take, filter } from 'rxjs';
import { ClearTrip, } from '../store/actions/position.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['../route/route.component.sass'],
})
export class RouteDetailComponent extends AbstractRouteComponent implements OnInit, OnDestroy {
  @Select(MePositionState)
  origin$!: Observable<GeolocationPosition>;

  @Select(PublicTransportState.trip)
  tripDetail$!: Observable<any>;

  constructor(
    private store: Store,
    private router: Router,
  ) {
    super();
  }

  ngOnInit() {
    this.origin$.pipe(
      take(1),
      filter(origin => !origin),
    ).subscribe(_ => this.router.navigate(['/']));
  }

  ngOnDestroy() {
    this.store.dispatch(new ClearTrip());
  }
}
