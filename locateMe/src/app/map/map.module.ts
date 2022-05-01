import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxsModule } from '@ngxs/store';
import { GeolocationState, MePositionState, OtherPositionState } from '../store/states/app.state';
import { MapComponent } from './map.component';
import { ShareModule } from '../share/share.module';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from '../widgets/widgets.module';
import { AngularResizeEventModule } from 'angular-resize-event';

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
      GeolocationState,
    ]),

    // Utils
    AngularResizeEventModule,

    // App
    ShareModule,
    WidgetsModule,
  ],
  exports: [
    MapComponent,
  ],
})
export class MapModule {
}
