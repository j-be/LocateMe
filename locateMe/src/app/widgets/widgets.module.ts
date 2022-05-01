import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { GeolocationState } from '../store/states/app.state';
import { GeolocationControlComponent } from './geolocation-control/geolocation-control.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    GeolocationControlComponent,
    LayoutComponent,
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
  ],
  providers: [
    MessageService,
  ],
})
export class WidgetsModule {
}
