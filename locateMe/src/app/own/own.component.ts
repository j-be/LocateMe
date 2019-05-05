import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import {LocationService} from '../location.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-own',
  templateUrl: './own.component.html',
  styleUrls: ['./own.component.styl']
})
export class OwnComponent implements OnInit {

  constructor(
    public mapService: MapService,
    public locationService: LocationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.mapService.init('map');
  }

  startWatchingLocation() {
    this.messageService.clear();
    this.messageService.add({
      severity: 'info',
      summary: 'Locating',
      detail: 'This might take a bit...'
    });
    this.locationService.startWatchingLocation();
  }
}
