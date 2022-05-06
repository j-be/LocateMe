import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, take } from 'rxjs';
import { LinkGeneratorService, Links } from '../service/linkGenerator.service';
import { StopLocating } from '../store/actions/position.actions';
import { MePositionState } from '../store/states/app.state';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
})
export class ShareComponent {
  display = false;
  links: Links | null = null;

  @Select(MePositionState)
  location$!: Observable<GeolocationPosition>;

  constructor(
    private linkGeneratorService: LinkGeneratorService,
    private store: Store,
  ) {
  }

  showDialog() {
    this.display = true;
    this.store.dispatch(new StopLocating());
    this.location$.pipe(
      take(1),
    ).subscribe(position => this.links = this.linkGeneratorService.getLinks(position));
  }
}
