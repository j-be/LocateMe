import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { RouteDetailComponent } from './route-detail.component';
import { MePositionState, PublicTransportState } from '../store/states/app.state';
import { WidgetsModule } from '../widgets/widgets.module';
import { WlRoutingService } from '../service/wlRouting.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RouteDetailComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: RouteDetailComponent },
    ]),

    // ngxs
    NgxsModule.forFeature([
      MePositionState,
      PublicTransportState,
    ]),

    // This app
    WidgetsModule,
  ],
  providers: [
    WlRoutingService,
  ]
})
export class RouteDetailModule {
}
