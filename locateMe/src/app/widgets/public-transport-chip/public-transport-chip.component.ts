import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-public-transport-chip',
  templateUrl: './public-transport-chip.component.html',
  styleUrls: ['./public-transport-chip.component.sass'],
})
export class PublicTransportChipComponent {
  @Input()
  line!: { type: string; number: string };

  get styleClass(): string {
    switch (this.line.type) {
      case '1':
        return 'subway';
      case '2':
        return 'train';
      case '3':
        return 'directions_bus';
      case '4':
      case '6':
        return 'tram';
      case '99':
      case '100':
        return 'directions_walk';
      default:
        console.log('unknown type', this.line);
        return 'unknown';
    }
  }

  get lineName(): string {
    switch (this.line.type) {
      case '6':
        return 'WLB';
      case '99':
      case '100':
        return '\u200B';
      default:
        return this.line.number;
    }
  }
}
