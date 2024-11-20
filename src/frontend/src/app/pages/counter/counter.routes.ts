import { Routes } from '@angular/router';
import { canMatchFeature } from '../../components/shared/feature-management/feature.guard';
import { CounterComponent } from './counter.component';
import { UiComponent } from './ui.component';

export const COUNTER_ROUTES: Routes = [
  {
    path: '',
    component: CounterComponent,
    providers: [],
    canMatch: [canMatchFeature('counter')],
    // children: [
    //   {
    //     path: 'withdrawal',
    //     loadComponent: () =>
    //       import('./counter.component').then((c) => c.CounterComponent),
    //   },
    // ],
  },
  {
    path: 'ui',
    component: UiComponent,
  },
];
