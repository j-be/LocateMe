import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OwnComponent } from './own/own.component';
import {MapService} from './map.service';
import { OtherComponent } from './other/other.component';
import {RouterModule, Routes} from '@angular/router';
import {LocationService} from './location.service';
import {ShareComponent, ShareDialogComponent} from './share/share.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatDialogModule, MatExpansionModule} from '@angular/material';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {WlRoutingService} from './wlRouting.service';
import {RouteComponent, RouteDialogComponent} from './route/route.component';

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
    ShareDialogComponent,
    RouteComponent,
    RouteDialogComponent
  ],
  entryComponents: [
    ShareDialogComponent,
    RouteDialogComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [MapService, LocationService, WlRoutingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
