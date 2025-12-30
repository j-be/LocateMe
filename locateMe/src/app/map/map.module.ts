import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { NgxsModule } from '@ngxs/store';
import { MePositionState, OtherPositionState } from '../store/states/app.state';
import { MapComponent } from './map.component';
import { ShareModule } from '../share/share.module';
import { GeolocationControlComponent } from '../widgets/geolocation-control/geolocation-control.component';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  declarations: [
    MapComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MapComponent }
    ]),

    // Leaflet
    LeafletModule,

    // ngxs
    NgxsModule.forFeature([
      MePositionState,
      OtherPositionState,
    ]),

    // App
    GeolocationControlComponent,
    ShareModule,
    WidgetsModule,
  ],
  exports: [
    MapComponent,
  ],
})
export class MapModule {
}
