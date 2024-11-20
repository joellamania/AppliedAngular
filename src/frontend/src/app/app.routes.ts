import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { canMatchFeature } from './components/shared/feature-management/feature.guard';
import { ATM_ROUTES } from './features/atm/atm.routes';
import { COUNTER_ROUTES } from './pages/counter/counter.routes';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'gifts',
    canMatch: [canMatchFeature('gift-giving')],
    loadChildren: () =>
      import('./features/gifts/gifts.routes').then((r) => r.GIFT_ROUTES),
  },
  {
    path: 'atm',
    canMatch: [canMatchFeature('atm')],
    loadChildren: () =>
      import('./features/atm/atm.routes').then((r) => ATM_ROUTES),
  },
  {
    path: 'counter',
    canMatch: [canMatchFeature('counter')],
    loadChildren: () =>
      import('./pages/counter/counter.routes').then((r) => COUNTER_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
