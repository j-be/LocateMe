import {Component, OnInit, ViewChild} from '@angular/core';
import {WlRoutingService} from '../wlRouting.service';
import {LocationService} from '../location.service';
import {MapService} from '../map.service';
import {Dialog} from 'primeng/dialog';
import {RouteDetailComponent} from '../route-detail/route-detail.component';
import {AbstractRouteComponent} from './abstract-route.component';
import {Subject} from 'rxjs';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.styl']
})
export class RouteComponent extends AbstractRouteComponent implements OnInit {
  @ViewChild(Dialog) private dialog: Dialog;
  display = false;
  routes: any = null;

  detailSubject = new Subject<any>();

  constructor(
    private wlRoutingService: WlRoutingService,
    private messageService: MessageService,
    public locationService: LocationService,
    public mapService: MapService) {
    super();
  }

  ngOnInit() {
    this.dialog.onHide.subscribe(() => {
      this.routes = null;
    });
  }

  openDialog(): void {
    this.display = true;
    const origin = this.mapService.getMe().location;
    const destination = this.mapService.getOther().location;

    this.locationService.stopWatchingLocation();
    this.wlRoutingService.getRoute(origin, destination)
      .subscribe(
        (data) => {
          this.routes = data;
          console.log(this.routes);
          window.setTimeout(() => { this.dialog.center(); });
        },
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
