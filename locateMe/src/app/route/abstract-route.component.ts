export class AbstractRouteComponent {
  getStyleForTransportationType(type: string) {
    switch (type) {
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
        return `unknown-${type}`;
    }
  }

  formatPoint(point: any) {
    return point.dateTime.time + ' ' + point.name;
  }
}
