import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-public-transport-chip',
  templateUrl: './public-transport-chip.component.html',
  styleUrls: ['./public-transport-chip.component.sass']
})
export class PublicTransportChipComponent {

  @Input()
  line!: { type: string, number: string }

  get styleClass(): string {
    switch (this.line.type) {
      case '1':
        return 'subway';
      case '3':
        return 'bus';
      case '4':
        return 'tram';
      case '99':
      case '100':
        return 'walk';
      default:
        return 'unknown';
    }
  }
}
