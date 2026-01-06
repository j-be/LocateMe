import { environment } from '../../environments/environment';
import { Injectable, SecurityContext, inject } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Geolocation } from '../common';

export const SEP_CHAR = '+';

export interface Links {
  link: string;
  whatsApp: string;
  mailto: string;
  sms: SafeUrl;
}

@Injectable()
export class LinkGeneratorService {
  private readonly sanitizer = inject(DomSanitizer);

  getLinks(location: Geolocation): Links | null {
    if (!location) {
      return null;
    }

    const link = globalThis.location.protocol + '//' + globalThis.location.host + environment.baseHref + '#' +
      location.coords.latitude + SEP_CHAR +
      location.coords.longitude + SEP_CHAR +
      location.coords.accuracy;

    return {
      link,
      whatsApp: `https://wa.me/?text=${link}`,
      mailto: `mailto:?subject=Location&body=${link}`,
      sms: this.sanitizer.bypassSecurityTrustUrl('sms:?body=' +
        this.sanitizer.sanitize(SecurityContext.URL, link)),
    };
  }
}
