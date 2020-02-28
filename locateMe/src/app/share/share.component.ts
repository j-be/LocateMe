import {Component} from '@angular/core';
import {LinkGeneratorService, Links} from '../linkGenerator.service';
import {LocationService} from '../location.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.styl', ]
})
export class ShareComponent {
  display = false;
  links: Links = null;

  constructor(
    public locationService: LocationService,
    private linkGeneratorService: LinkGeneratorService,
  ) {}

  showDialog() {
    this.display = true;
    this.locationService.stopWatchingLocation();
    this.links = this.linkGeneratorService.getLinks(this.locationService.getLocation());
  }
}
