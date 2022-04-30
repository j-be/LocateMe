import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { GeolocationState } from '../store/states/app.state';
import { GeolocationControlComponent } from './geolocation-control/geolocation-control.component';

@NgModule({
  declarations: [
    GeolocationControlComponent,
  ],
  imports: [
    // Angular
    CommonModule,

    // ngxs
    NgxsModule.forFeature([
      GeolocationState,
    ]),
  ],
  exports: [
    GeolocationControlComponent,
  ],
})
export class WidgetsModule {
}
