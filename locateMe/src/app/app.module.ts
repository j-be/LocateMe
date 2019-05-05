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
import {MessageModule, MessageService, MessagesModule, ProgressSpinnerModule} from 'primeng/primeng';
import { TileLayerComponent } from './tile-layer/tile-layer.component';
import {FormsModule} from '@angular/forms';
import { RouteDetailComponent } from './route-detail/route-detail.component';
import {ToastModule} from 'primeng/toast';

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
    TileLayerComponent,
    RouteDetailComponent,
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
    CardModule,
    ProgressSpinnerModule,
    FormsModule,
    ToastModule,
    MessagesModule,
    MessageModule
  ],
  providers: [
    MapService,
    LocationService,
    WlRoutingService,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
