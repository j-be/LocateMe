import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {WlRoutingService} from '../service/wlRouting.service';
import {Dialog} from 'primeng/dialog';
import { combineLatest, Observable } from 'rxjs';
import {MessageService} from 'primeng/api';
import {switchMap} from 'rxjs/operators';
import {AbstractRouteComponent} from './abstract-route.component';
import {MePositionState, OtherPositionState, PublicTransport, PublicTransportState} from '../store/states/app.state';
import {Select, Store} from '@ngxs/store';
import {ClearTrips, SetTrip, SetTrips, StopLocating} from '../store/actions/position.actions';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
})
export class RouteComponent extends AbstractRouteComponent implements AfterViewInit {
  @ViewChild(Dialog)
  dialog!: Dialog;

  display = false;

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
  ) {
    super();
  }

  ngAfterViewInit(): void {
    this.dialog.onHide.subscribe(() => this.store.dispatch(new ClearTrips()));
  }

  openDialog(): void {
    this.display = true;
    this.store.dispatch(new StopLocating());

    combineLatest([this.origin$, this.destination$])
      .pipe(switchMap(([origin, destination]) => this.wlRoutingService.getRoute(origin, destination)))
      .subscribe({
        next: data => this.store.dispatch(new SetTrips(data.trips)),
        error: _ => {
          this.display = false;
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
  }
}
