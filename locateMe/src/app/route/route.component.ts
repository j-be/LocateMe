import {Component, OnInit, ViewChild} from '@angular/core';
import {WlRoutingService} from '../wlRouting.service';
import {LocationService} from '../location.service';
import {MapService} from '../map.service';
import {Dialog} from 'primeng/dialog';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.styl']
})
export class RouteComponent implements OnInit {
  @ViewChild(Dialog) private dialog: Dialog;
  display = false;
  routes: any = {};

  constructor(
    private wlRoutingService: WlRoutingService,
    public locationService: LocationService,
    public mapService: MapService) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    this.display = true;
    const origin = this.mapService.getMe().location;
    const destination = this.mapService.getOther().location;

    this.locationService.stopWatchingLocation();
    this.wlRoutingService.getRoute(origin, destination)
      .subscribe((data) => {
        this.routes = data;
        window.setTimeout(() => { this.dialog.center(); });
      });
  }

  formatPoint(point) {
    return point.dateTime.time + ' ' + point.name;
  }

  getStyleForTransportationType(type: string) {
    switch (type) {
      case '1':
        return 'subway';
      case '3':
        return 'bus';
      case '4':
        return 'tram';
      case '99':
      case '100':
        return 'walk';
      default:
        return `unknown-${type}`;
    }
  }
}
