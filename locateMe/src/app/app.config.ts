import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
import { provideStore } from '@ngxs/store';
import { environment } from '../environments/environment';
import { MePositionState, OtherPositionState } from './store/states/app.state';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // PrimeNG
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
          preset: Lara,
        }
    }),
    // ngxs
    provideStore([
      MePositionState,
      OtherPositionState,
    ], {
       developmentMode: !environment.production,
    }),
    MessageService,
  ],
};
