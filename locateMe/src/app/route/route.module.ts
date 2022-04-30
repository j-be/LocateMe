import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RouteDetailComponent } from '../route-detail/route-detail.component';
import { WlRoutingService } from '../service/wlRouting.service';
import { GeolocationState, MePositionState, OtherPositionState, PublicTransportState } from '../store/states/app.state';
import { RouteComponent } from './route.component';

@NgModule({
  declarations: [
    RouteComponent,
    RouteDetailComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: RouteComponent },
      { path: 'detail', component: RouteDetailComponent },
    ]),

    // PrimeNG
    CardModule,
    MessageModule,
    ProgressSpinnerModule,

    // ngxs
    NgxsModule.forFeature([
      MePositionState,
      OtherPositionState,
      GeolocationState,
      PublicTransportState,
    ]),
  ],
  providers: [
    WlRoutingService,
    MessageService,
  ],
})
export class RouteModule {
}
