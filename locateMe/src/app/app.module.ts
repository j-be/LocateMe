import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WlRoutingService} from './service/wlRouting.service';
import {MessageService} from 'primeng/api';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';
import { MapModule} from './map/map.module';
import { ShareModule } from './share/share.module';

const appRoutes: Routes = [
  { path: '', component: MapComponent },
  { path: 'trips', loadChildren: () => import('./route/route.module').then(m => m.RouteModule) },
  {
    path: 'test',
    redirectTo: '/#48.2009786+16.3693116+12',
    pathMatch: 'full',
  }];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
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
