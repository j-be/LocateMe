const BASE_URI = '/';

export class LinkGeneratorService {

  static getLinks(location) {
    if (location) {
      const link = 'https://' + window.location.host + BASE_URI + 'show?' +
        'lat=' + location.coords.latitude + '&' +
        'lon=' + location.coords.longitude + '&' +
        'acc=' + location.coords.accuracy;

      return {
        raw: link,
        whatsapp: 'whatsapp://send?text=' + encodeURI(link),
        mailto: 'mailto:?subject=Location&body=' + encodeURI(link),
        sms: 'sms:?body=' + encodeURI(link)
      };
    }
  }
}
