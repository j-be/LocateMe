import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { combineLatest, filter, Observable, Subject, takeUntil } from 'rxjs';
import { forgeGeolocation } from '../common';
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
      filter(([me, other]) => !!me || !!other),
      takeUntil(this.onDestroy$),
    ).subscribe(() => {
      this.router.navigate(['map'], { skipLocationChange: true })
        .catch((err) => console.error("Failed to navigate", err)) });
    this.route.fragment.pipe(
      takeUntil(this.onDestroy$),
    ).subscribe(fragment => {
      if (fragment?.length) {
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
    return forgeGeolocation(Number(fragments[0]), Number(fragments[1]), Number(fragments[2]));
  }
}
