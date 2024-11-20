import { Routes } from '@angular/router';
import { canMatchFeature } from '../../components/shared/feature-management/feature.guard';
import { CounterComponent } from './counter.component';
import { UiComponent } from './ui.component';
import { PrefsComponent } from './prefs.component';
import { CounterPrefStore } from './services/counter-prefs.service';

export const COUNTER_ROUTES: Routes = [
  {
    path: '',
    component: CounterComponent,
    providers: [CounterPrefStore],
    canMatch: [canMatchFeature('counter')],
    children: [
      {
        path: 'ui',
        component: UiComponent,
      },
      {
        path: 'prefs',
        component: PrefsComponent,
      },
    ],
  },
];
