const BASE_URI = '/locateMe/';

export class Links {
  whatsapp: string;
  mailto: string;
  sms: string;

  constructor(public raw: string) {
    this.whatsapp = 'whatsapp://send?text=' + encodeURI(raw);
    this.mailto = 'mailto:?subject=Location&body=' + encodeURI(raw);
    this.sms = 'sms:?body=' + encodeURI(raw);
  }
}

export class LinkGeneratorService {

  static getLinks(location) {
    if (location) {
      const link = 'https://' + window.location.host + BASE_URI + 'show?' +
        'lat=' + location.coords.latitude + '&' +
        'lon=' + location.coords.longitude + '&' +
        'acc=' + location.coords.accuracy;

      return new Links(link);
    }
  }
}
