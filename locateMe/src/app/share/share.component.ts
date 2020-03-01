import {Component, OnDestroy, OnInit} from '@angular/core';
import {LinkGeneratorService, Links} from '../service/linkGenerator.service';
import {Store} from '@ngrx/store';
import {AppState, Position} from '../store/states/app.state';
import {selectMe} from '../store/selectors/position.selectors';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {locatingStop} from '../store/actions/position.actions';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.styl', ]
})
export class ShareComponent implements OnInit, OnDestroy {
  display = false;
  links: Links = null;

  location$: Observable<Position>;

  private onDestroy$ = new Subject<boolean>();

  constructor(
    private linkGeneratorService: LinkGeneratorService,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.location$ = this.store.select(selectMe)
      .pipe(takeUntil(this.onDestroy$));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  showDialog() {
    this.display = true;
    this.store.dispatch(locatingStop());
    this.location$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(position => this.links = this.linkGeneratorService.getLinks(position));
  }
}
