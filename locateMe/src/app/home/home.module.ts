import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { GeolocationState, MePositionState, OtherPositionState } from '../store/states/app.state';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    RouterModule.forChild([]),

    // ngxs
    NgxsModule.forFeature([
      MePositionState,
      OtherPositionState,
      GeolocationState,
    ]),

    WidgetsModule,
  ],
  providers: [
    MessageService,
  ],
})
export class HomeModule {
}
