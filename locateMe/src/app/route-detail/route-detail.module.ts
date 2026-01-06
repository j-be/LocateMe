import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { RouteDetailComponent } from './route-detail.component';
import {
  MePositionState,
  PublicTransportState,
} from '../store/states/app.state';
import { WidgetsModule } from '../widgets/widgets.module';
import { WlRoutingService } from '../service/wlRouting.service';
import { PublicTransportChipComponent } from '../widgets/public-transport-chip/public-transport-chip.component';

@NgModule({
  declarations: [
    RouteDetailComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    RouterModule.forChild([
      { path: '', component: RouteDetailComponent },
    ]),

    // ngxs
    NgxsModule.forFeature([
      MePositionState,
      PublicTransportState,
    ]),

    // This app
    PublicTransportChipComponent,
    WidgetsModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    WlRoutingService,
  ],
})
export class RouteDetailModule {
}
