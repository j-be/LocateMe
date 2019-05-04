import {Component} from '@angular/core';
import {LinkGeneratorService, Links} from '../linkGenerator.service';
import {LocationService} from '../location.service';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.styl', ]
})
export class ShareComponent {
  display = false;
  links: Links = null;

  constructor(public locationService: LocationService) {}

  showDialog() {
    this.display = true;
    this.locationService.stopWatchingLocation();
    console.log(this.locationService.getLocation());
    this.links = LinkGeneratorService.getLinks(this.locationService.getLocation());
  }
}
