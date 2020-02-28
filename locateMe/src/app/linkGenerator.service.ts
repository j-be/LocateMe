import {environment} from '../environments/environment';

export const SEP_CHAR = '+';

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
      const link = window.location.protocol + '//' + window.location.host + environment.baseHref + 'show#' +
        location.coords.latitude + SEP_CHAR +
        location.coords.longitude + SEP_CHAR +
        location.coords.accuracy;

      return new Links(link);
    }
  }
}
