import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
import { updatePrimaryPalette, palette } from '@primeng/themes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'trips', loadChildren: () => import('./route/route.module').then(m => m.RouteModule) },
      { path: 'map', loadChildren: () => import('./map/map.module').then(m => m.MapModule) },
      { path: 'test', redirectTo: '/#48.2009786+16.3693116+12', pathMatch: 'full', },
    ]),
    BrowserAnimationsModule,
    BrowserModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production }),

    HomeModule,
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
          preset: Lara,
        }
    })
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
