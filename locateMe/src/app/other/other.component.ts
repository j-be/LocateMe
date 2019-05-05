import { Component, OnInit } from '@angular/core';
import {MapService} from '../map.service';
import {ActivatedRoute} from '@angular/router';
import {LocationService} from '../location.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.styl']
})
export class OtherComponent implements OnInit {

  constructor(
    public mapService: MapService,
    public locationService: LocationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.mapService.init('map');

    this.route
      .queryParams
      .subscribe((params) => {
        const location = {
          coords: {
            latitude: params.lat,
            longitude: params.lon,
            accuracy: params.acc
          }
        };
        this.mapService.showOtherOnMap(location, true);
      });
  }

  locateMe() {
    this.locationService.startWatchingLocation();
  }
}
