import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { combineLatest, filter, Observable, Subject, takeUntil } from 'rxjs';
import { SEP_CHAR } from '../service/linkGenerator.service';
import { PositionOther } from '../store/actions/position.actions';
import { MePositionState, OtherPositionState } from '../store/states/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {

  @Select(MePositionState)
  positionMe$!: Observable<GeolocationPosition>;
  @Select(OtherPositionState)
  positionOther$!: Observable<GeolocationPosition>;

  private onDestroy$: Subject<boolean> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router,
  ) {
  }

  ngOnInit() {
    combineLatest([
      this.positionMe$,
      this.positionOther$,
    ]).pipe(
        takeUntil(this.onDestroy$),
        filter(([me, other]) => !!me || !!other),
      ).subscribe(() => this.router.navigate(['map']));

    this.route.fragment
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(fragment => {
        if (fragment && fragment.length > 0) {
          this.store.dispatch(new PositionOther(HomeComponent.parseFragment(fragment)));
        }
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  private static parseFragment(fragment: string): GeolocationPosition {
    const fragments = fragment.split(SEP_CHAR);
    return {
      coords: {
        latitude: Number(fragments[0]),
        longitude: Number(fragments[1]),
        accuracy: Number(fragments[2]),
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null,
      },
      timestamp: new Date().getTime(),
    };
  }
}
