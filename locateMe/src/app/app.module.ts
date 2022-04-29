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
import { RouteModule } from './route/route.module';
import { ShareModule } from './share/share.module';

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
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserAnimationsModule,
    BrowserModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production }),

    MapModule,
    RouteModule,
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
