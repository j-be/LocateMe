import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { GeolocationState } from '../store/states/app.state';
import { GeolocationControlComponent } from './geolocation-control/geolocation-control.component';
import { LayoutComponent } from './layout/layout.component';
import { PublicTransportChipComponent } from './public-transport-chip/public-transport-chip.component';

@NgModule({
  declarations: [
    GeolocationControlComponent,
    LayoutComponent,
    PublicTransportChipComponent,
  ],
  imports: [
    // Angular
    CommonModule,

    // PrimeNG
    ToastModule,

    // ngxs
    NgxsModule.forFeature([
      GeolocationState,
    ]),
  ],
  exports: [
    GeolocationControlComponent,
    LayoutComponent,
    PublicTransportChipComponent,
  ],
  providers: [
    MessageService,
  ],
})
export class WidgetsModule {
}
