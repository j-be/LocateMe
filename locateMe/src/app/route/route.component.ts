import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {WlRoutingService} from '../service/wlRouting.service';
import {Dialog} from 'primeng/dialog';
import {combineLatest, Observable, Subject} from 'rxjs';
import {MessageService} from 'primeng/api';
import {switchMap} from 'rxjs/operators';
import {AbstractRouteComponent} from './abstract-route.component';
import {MePositionState, OtherPositionState} from '../store/states/app.state';
import {Select, Store} from '@ngxs/store';
import {StopLocating} from '../store/actions/position.actions';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
})
export class RouteComponent extends AbstractRouteComponent implements AfterViewInit {
  @ViewChild(Dialog)
  dialog!: Dialog;

  display = false;
  routes: any = null;

  detailSubject = new Subject<any>();

  @Select(MePositionState)
  origin$!: Observable<GeolocationPosition>;
  @Select(OtherPositionState)
  destination$!: Observable<GeolocationPosition>;

  constructor(
    private wlRoutingService: WlRoutingService,
    private messageService: MessageService,
    private store: Store,
  ) {
    super();
  }

  ngAfterViewInit(): void {
    this.dialog.onHide.subscribe(() => this.routes = null);
  }

  openDialog(): void {
    this.display = true;
    this.store.dispatch(new StopLocating());

    combineLatest([this.origin$, this.destination$])
      .pipe(switchMap(([origin, destination]) => this.wlRoutingService.getRoute(origin, destination)))
      .subscribe(
        data => this.routes = data,
        _ => {
          this.display = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Cannot fetch routes',
            detail: 'An error occured while fetching data from WienerLininen!'
          });
        });
  }

  showDetails(tripDetails: any) {
    this.detailSubject.next(tripDetails);
  }
}
