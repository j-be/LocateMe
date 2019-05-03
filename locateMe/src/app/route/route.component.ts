import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {WlRoutingService} from '../wlRouting.service';
import {LocationService} from '../location.service';
import {MapService} from '../map.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.styl']
})
export class RouteComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private wlRoutingService: WlRoutingService,
    public locationService: LocationService,
    public mapService: MapService
  ) { }

  ngOnInit() {
  }

  openDialog(): void {
    const origin = this.mapService.getMe().location;
    const destination = this.mapService.getOther().location;

    this.locationService.stopWatchingLocation();
    this.wlRoutingService.getRoute(origin, destination)
      .subscribe((data) => {
        console.log(data);
        this.dialog.open(RouteDialogComponent, {
          data
        });
      });
  }
}

@Component({
  selector: 'app-route-dialog',
  templateUrl: 'route-dialog.html',
})
export class RouteDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data) {}

  formatPoint(point) {
    return point.dateTime.time + ' ' + point.name;
  }
}
