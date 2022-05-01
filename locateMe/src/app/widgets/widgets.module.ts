import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
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
  ],
  exports: [
    GeolocationControlComponent,
    LayoutComponent,
  ],
})
export class WidgetsModule {
}
