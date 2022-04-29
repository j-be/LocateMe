import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxsModule } from '@ngxs/store';
import { ToastModule } from 'primeng/toast';
import { GeolocationState, MePositionState, OtherPositionState } from '../store/states/app.state';
import { MapComponent } from './map.component';
import { ShareModule } from '../share/share.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MapComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    RouterModule.forChild([]),

    // PrimeNG
    ToastModule,

    // Leaflet
    LeafletModule,

    // ngxs
    NgxsModule.forFeature([
      MePositionState,
      OtherPositionState,
      GeolocationState,
    ]),

    // App
    ShareModule,
  ],
  exports: [
    MapComponent,
  ],
})
export class MapModule {
}
