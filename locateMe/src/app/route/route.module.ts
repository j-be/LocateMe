import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RouteDetailComponent } from '../route-detail/route-detail.component';
import { WlRoutingService } from '../service/wlRouting.service';
import { GeolocationState, MePositionState, OtherPositionState } from '../store/states/app.state';
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

    // PrimeNG
    CardModule,
    DialogModule,
    MessageModule,
    ProgressSpinnerModule,

    // ngxs
    NgxsModule.forFeature([
      MePositionState,
      OtherPositionState,
      GeolocationState,
    ]),
  ],
  providers: [
    WlRoutingService,
    MessageService,
  ],
  exports: [
    RouteComponent,
  ],
})
export class RouteModule {
}
