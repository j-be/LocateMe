import {Component, OnDestroy, OnInit} from '@angular/core';
import {MapService} from '../map.service';
import {ActivatedRoute} from '@angular/router';
import {LocationService} from '../location.service';
import {take, takeUntil} from 'rxjs/operators';
import {SEP_CHAR} from '../linkGenerator.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.styl']
})
export class OtherComponent implements OnInit, OnDestroy {

  private onDestroy$: Subject<boolean> = new Subject();

  constructor(
    public mapService: MapService,
    public locationService: LocationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.mapService.init('map');

    this.route.fragment
      .pipe(takeUntil(this.onDestroy$))
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

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  locateMe() {
    this.locationService.startWatchingLocation();
  }
}
