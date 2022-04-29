import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AbstractRouteComponent} from '../route/abstract-route.component';
import {Dialog} from 'primeng/dialog';
import { Select, Store } from '@ngxs/store';
import { PublicTransport, PublicTransportState } from '../store/states/app.state';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { ClearTrip, } from '../store/actions/position.actions';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
})
export class RouteDetailComponent extends AbstractRouteComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(Dialog)
  dialog!: Dialog;

  @Select(PublicTransportState)
  routes$!: Observable<PublicTransport>;

  onDestroy$ = new Subject<boolean>();

  tripDetail: any = null;
  display = false;

  constructor(
    private store: Store,
  ) {
    super();
  }

  ngOnInit() {
    this.routes$.pipe(
      takeUntil(this.onDestroy$),
      tap(console.log),
    ).subscribe(routes => {
      this.tripDetail = routes.trip;
      this.display = !!routes.trip;
    });
  }

  ngAfterViewInit(): void {
    this.dialog.onHide.subscribe(() => this.store.dispatch(new ClearTrip()));
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
