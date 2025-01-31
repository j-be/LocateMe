import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MePositionState, OtherPositionState } from './store/states/app.state';
import { provideStates } from '@ngxs/store';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    providers: [
      provideStates([
        MePositionState,
        OtherPositionState,
      ]),
    ]
  },
  { path: 'trips', loadChildren: () => import('./route/route.module').then(m => m.RouteModule) },
  { path: 'map', loadChildren: () => import('./map/map.module').then(m => m.MapModule) },
  { path: 'test', redirectTo: '/#48.2009786+16.3693116+12', pathMatch: 'full', },
];
