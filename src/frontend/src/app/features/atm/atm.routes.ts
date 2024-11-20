import { Routes } from '@angular/router';
import { canMatchFeature } from '../../components/shared/feature-management/feature.guard';
import { AtmComponent } from './atm.component';
import { AtmStore } from './services/atm.store';

export const ATM_ROUTES: Routes = [
  {
    path: '',
    component: AtmComponent,
    providers: [AtmStore],
    canMatch: [canMatchFeature('atm')],
    children: [
      {
        path: 'withdrawal',
        loadComponent: () =>
          import('./pages/withdrawal.component').then(
            (c) => c.WithdrawalComponent,
          ),
      },
    ],
  },
];
