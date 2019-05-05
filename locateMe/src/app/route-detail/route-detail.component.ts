import { Component, OnInit } from '@angular/core';
import {AbstractRouteComponent} from '../route/abstract-route.component';
import {RouteComponent} from '../route/route.component';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.styl']
})
export class RouteDetailComponent extends AbstractRouteComponent implements OnInit {

  tripDetail = null;
  display = false;

  constructor(private parent: RouteComponent) {
    super();
  }

  ngOnInit() {
    this.parent.detailSubject.subscribe((tripDetail) => this.showDialog(tripDetail));
  }

  showDialog(tripDetail) {
    this.tripDetail = tripDetail;
    this.display = true;
  }
}
