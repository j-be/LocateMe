import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {LinkGeneratorService} from '../linkGenerator.service';
import {LocationService} from '../location.service';
import {MapService} from '../map.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.styl']
})
export class ShareComponent {
  constructor(public dialog: MatDialog, public locationService: LocationService, public mapService: MapService) {}

  openDialog(): void {
    this.locationService.stopWatchingLocation();
    console.log(this.locationService.getLocation());
    this.dialog.open(ShareDialogComponent, {
      data: {links: LinkGeneratorService.getLinks(this.locationService.getLocation())}
    });
  }

}

@Component({
  selector: 'app-share-dialog',
  templateUrl: 'share-dialog.html',
})
export class ShareDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ShareDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
