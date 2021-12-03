import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {RouterModule, Routes} from '@angular/router';
import {ShareComponent} from './share/share.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WlRoutingService} from './service/wlRouting.service';
import {RouteComponent} from './route/route.component';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {RouteDetailComponent} from './route-detail/route-detail.component';
import {ToastModule} from 'primeng/toast';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';
import {GeolocationState, MePositionState, OtherPositionState} from './store/states/app.state';

const appRoutes: Routes = [
  {path: '', component: MapComponent},
  {
    path: 'test',
    redirectTo: '/#48.2009786+16.3693116+12',
    pathMatch: 'full',
  }];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ShareComponent,
    RouteComponent,
    RouteDetailComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    DialogModule,
    CardModule,
    ProgressSpinnerModule,
    ToastModule,
    MessageModule,
    LeafletModule,
    NgxsModule.forRoot(
      [
        MePositionState,
        OtherPositionState,
        GeolocationState,
      ], {
        developmentMode: !environment.production
      }
    ),
  ],
  providers: [
    WlRoutingService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
