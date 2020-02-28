import { Component, OnInit } from '@angular/core';
import {MapService} from '../map.service';
import {ActivatedRoute} from '@angular/router';
import {LocationService} from '../location.service';
import {SEP_CHAR} from '../linkGenerator.service';

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

    this.route.fragment
      .subscribe((fragment) => {
        const fragments = fragment.split(SEP_CHAR);
        const location = {
          coords: {
            latitude: fragments[0],
            longitude: fragments[1],
            accuracy: fragments[2],
          }
        };
        this.mapService.showOtherOnMap(location, true);
      });
  }

  locateMe() {
    this.locationService.startWatchingLocation();
  }
}
