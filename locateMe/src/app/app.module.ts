import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WlRoutingService} from './service/wlRouting.service';
import {MessageService} from 'primeng/api';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';
import { MapModule} from './map/map.module';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: MapComponent },
      { path: 'trips', loadChildren: () => import('./route/route.module').then(m => m.RouteModule) },
      { path: 'map', loadChildren: () => import('./map/map.module').then(m => m.MapModule) },
      { path: 'test', redirectTo: '/#48.2009786+16.3693116+12', pathMatch: 'full', },
    ]),
    BrowserAnimationsModule,
    BrowserModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production }),

    MapModule,
    ShareModule,
  ],
  providers: [
    WlRoutingService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
