import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OwnComponent } from './own/own.component';
import {MapService} from './map.service';
import { OtherComponent } from './other/other.component';
import {RouterModule, Routes} from '@angular/router';
import {LocationService} from './location.service';
import {ShareComponent} from './share/share.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WlRoutingService} from './wlRouting.service';
import {RouteComponent} from './route/route.component';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';

const appRoutes: Routes = [
  { path: 'me', component: OwnComponent },
  { path: 'show', component: OtherComponent },
  { path: '',
    redirectTo: '/me',
    pathMatch: 'full'
  },
  { path: 'test',
    redirectTo: '/show?lat=48&lon=16&acc=123',
    pathMatch: 'full'
  }];

@NgModule({
  declarations: [
    AppComponent,
    OwnComponent,
    OtherComponent,
    ShareComponent,
    RouteComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ButtonModule,
    DialogModule,
    CardModule
  ],
  providers: [MapService, LocationService, WlRoutingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
