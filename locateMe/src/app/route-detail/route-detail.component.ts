import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractRouteComponent} from '../route/abstract-route.component';
import {RouteComponent} from '../route/route.component';
import {Dialog} from 'primeng/dialog';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
})
export class RouteDetailComponent extends AbstractRouteComponent implements OnInit {
  @ViewChild(Dialog)
  dialog!: Dialog;

  tripDetail: any = null;
  display = false;

  constructor(private parent: RouteComponent) {
    super();
  }

  ngOnInit() {
    this.parent.detailSubject.subscribe((tripDetail) => this.showDialog(tripDetail));
  }

  showDialog(tripDetail: any) {
    this.tripDetail = tripDetail;
    this.display = true;
  }
}
