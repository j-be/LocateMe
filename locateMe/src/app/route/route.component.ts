import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {WlRoutingService} from '../service/wlRouting.service';
import { combineLatest, filter, Observable, take } from 'rxjs';
import {MessageService} from 'primeng/api';
import {switchMap} from 'rxjs/operators';
import {AbstractRouteComponent} from './abstract-route.component';
import {MePositionState, OtherPositionState, PublicTransport, PublicTransportState} from '../store/states/app.state';
import {Select, Store} from '@ngxs/store';
import {SetTrip, SetTrips, StopLocating} from '../store/actions/position.actions';

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
  routes$!: Observable<PublicTransport>;

  constructor(
    private wlRoutingService: WlRoutingService,
    private messageService: MessageService,
    private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(new StopLocating());

    this.origin$.pipe(
      take(1),
      filter(origin => !origin),
    ).subscribe(_ => this.router.navigate(['/']));

    combineLatest([this.origin$, this.destination$])
      .pipe(
        filter(([origin, _]) => !!origin),
        switchMap(([origin, destination]) => this.wlRoutingService.getRoute(origin, destination)),
      )
      .subscribe({
        next: data => this.store.dispatch(new SetTrips(data.trips)),
        error: _ => {
          this.messageService.add({
            severity: 'error',
            summary: 'Cannot fetch routes',
            detail: 'An error occured while fetching data from WienerLininen!'
          });
        }
      });
  }

  showDetails(trip: any) {
    this.store.dispatch(new SetTrip(trip));
    this.router.navigate(['detail'], { relativeTo: this.activatedRoute });
  }
}
