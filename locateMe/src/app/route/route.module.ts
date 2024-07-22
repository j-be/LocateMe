import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { WlRoutingService } from '../service/wlRouting.service';
import {
  GeolocationState,
  MePositionState,
  OtherPositionState,
  PublicTransportState,
} from '../store/states/app.state';
import { WidgetsModule } from '../widgets/widgets.module';
import { RouteComponent } from './route.component';

@NgModule({
  declarations: [
    RouteComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    RouterModule.forChild([
      { path: '', component: RouteComponent },
      { path: 'detail', loadChildren: () => import('../route-detail/route-detail.module').then(m => m.RouteDetailModule) },
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

    // This app
    WidgetsModule,
  ],
  providers: [
    WlRoutingService,
    MessageService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class RouteModule {
}
