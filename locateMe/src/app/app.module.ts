import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';

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
  bootstrap: [AppComponent],
})
export class AppModule {
}
