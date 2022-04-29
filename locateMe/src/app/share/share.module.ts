import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { LinkGeneratorService } from '../service/linkGenerator.service';
import { GeolocationState, MePositionState, OtherPositionState } from '../store/states/app.state';
import { ShareComponent } from './share.component';

@NgModule({
  declarations: [
    ShareComponent,
  ],
  imports: [
    // Angular
    CommonModule,

    // PrimeNG
    DialogModule,

    // ngxs
    NgxsModule.forFeature([
      MePositionState,
      GeolocationState,
    ]),
  ],
  providers: [
    LinkGeneratorService,
    MessageService,
  ],
  exports: [
    ShareComponent,
  ],
})
export class ShareModule {
}
