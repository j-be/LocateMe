import {environment} from '../../environments/environment';
import {Injectable, SecurityContext} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Position} from '../store/states/app.state';

export const SEP_CHAR = '+';

export interface Links {
  link: string;
  whatsApp: string;
  mailto: string;
  sms: SafeUrl;
}

@Injectable({providedIn: 'root'})
export class LinkGeneratorService {

  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }

  getLinks(location: Position): Links {
    if (location) {
      const link = window.location.protocol + '//' + window.location.host + environment.baseHref + '#' +
        location.lat + SEP_CHAR +
        location.lng + SEP_CHAR +
        location.acc;

      return {
        link,
        whatsApp: 'https://wa.me/?text=' + link,
        mailto: 'mailto:?subject=Location&body=' + link,
        sms: this.sanitizer.bypassSecurityTrustUrl('sms:?body=' +
          this.sanitizer.sanitize(SecurityContext.URL, link)),
      };
    }
  }
}
