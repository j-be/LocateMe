import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import {LocationService} from '../location.service';

@Component({
  selector: 'app-own',
  templateUrl: './own.component.html',
  styleUrls: ['./own.component.styl']
})
export class OwnComponent implements OnInit {

  constructor(public mapService: MapService, public locationService: LocationService) { }

  ngOnInit() {
    this.mapService.init('map');
  }
}
