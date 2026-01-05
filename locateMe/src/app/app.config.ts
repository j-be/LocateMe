import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara'
import { provideStore } from '@ngxs/store';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // PrimeNG
    providePrimeNG({
      theme: {
        preset: Lara,
      },
    }),
    provideStore(),
    MessageService,
  ],
};
