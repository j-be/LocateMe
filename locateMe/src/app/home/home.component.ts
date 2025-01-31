import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { combineLatest, filter, Observable, Subject, takeUntil } from 'rxjs';
import { forgeGeolocation, Geolocation } from '../common';
import { SEP_CHAR } from '../service/linkGenerator.service';
import { PositionOther } from '../store/actions/position.actions';
import { MePositionState, OtherPositionState } from '../store/states/app.state';
import { WidgetsModule } from '../widgets/widgets.module';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.sass'],
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    WidgetsModule,
  ],
  providers: [
    MessageService,
  ],
})
export class HomeComponent implements OnInit, OnDestroy {

  positionMe$: Observable<Geolocation>;
  positionOther$: Observable<Geolocation>;

  private onDestroy$: Subject<boolean> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private readonly store: Store,
    private router: Router,
  ) {
    this.positionMe$ = this.store.select(MePositionState.getState);
    this.positionOther$ = this.store.select(OtherPositionState.getState);
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

  private static parseFragment(fragment: string): Geolocation {
    const fragments = fragment.split(SEP_CHAR);
    return forgeGeolocation(Number(fragments[0]), Number(fragments[1]), Number(fragments[2]));
  }
}
