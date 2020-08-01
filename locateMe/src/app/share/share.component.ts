import {Component, OnDestroy, OnInit} from '@angular/core';
import {LinkGeneratorService, Links} from '../service/linkGenerator.service';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {MePositionState, Position} from '../store/states/app.state';
import {Select, Store} from '@ngxs/store';
import {StopLocating} from '../store/actions/position.actions';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.styl', ]
})
export class ShareComponent implements OnInit, OnDestroy {
  display = false;
  links: Links = null;

  @Select(MePositionState)
  location$: Observable<Position>;

  private onDestroy$ = new Subject<boolean>();

  constructor(
    private linkGeneratorService: LinkGeneratorService,
    private store: Store,
  ) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  showDialog() {
    this.display = true;
    this.store.dispatch(new StopLocating());
    this.location$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(position => this.links = this.linkGeneratorService.getLinks(position));
  }
}
