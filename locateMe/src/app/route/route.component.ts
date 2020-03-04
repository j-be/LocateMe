import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {WlRoutingService} from '../service/wlRouting.service';
import {Dialog} from 'primeng/dialog';
import {combineLatest, Observable, Subject} from 'rxjs';
import {MessageService} from 'primeng/api';
import {Store} from '@ngrx/store';
import {AppState, Position} from '../store/states/app.state';
import {locatingStop} from '../store/actions/position.actions';
import {switchMap} from 'rxjs/operators';
import {selectMe, selectOther} from '../store/selectors/position.selectors';
import {AbstractRouteComponent} from './abstract-route.component';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.styl']
})
export class RouteComponent extends AbstractRouteComponent implements OnInit, AfterViewInit {
  @ViewChild(Dialog)
  dialog: Dialog;

  display = false;
  routes: any = null;

  detailSubject = new Subject<any>();

  origin$: Observable<Position>;
  destination$: Observable<Position>;

  constructor(
    private wlRoutingService: WlRoutingService,
    private messageService: MessageService,
    private store: Store<AppState>,
  ) {
    super();
  }

  ngOnInit(): void {
    this.origin$ = this.store.select(selectMe);
    this.destination$ = this.store.select(selectOther);
  }

  ngAfterViewInit(): void {
    this.dialog.onHide.subscribe(() => this.routes = null);
  }

  openDialog(): void {
    this.display = true;
    this.store.dispatch(locatingStop());

    combineLatest([this.origin$, this.destination$])
      .pipe(switchMap(([origin, destination]) => this.wlRoutingService.getRoute(origin, destination)))
      .subscribe(
        (data) => this.routes = data,
        () => {
          this.display = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Cannot fetch routes',
            detail: 'An error occured while fetching data from WienerLininen!'
          });
        });
  }

  showDetails(tripDetails) {
    this.detailSubject.next(tripDetails);
  }
}
