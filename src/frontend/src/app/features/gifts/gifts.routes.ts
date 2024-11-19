import { Routes } from '@angular/router';
import { GiftsComponent } from './gifts.component';
import { PeopleComponent } from './pages/people.component';
import { PeopleEntryComponent } from './pages/people-entry.component';
import { PeopleStore } from './services/people.store';

export const GIFT_ROUTES: Routes = [
  {
    path: '',
    component: GiftsComponent,
    providers: [PeopleStore],
    children: [
      {
        path: 'people',
        component: PeopleComponent,
      },
      {
        path: 'people-entry',
        component: PeopleEntryComponent,
      },
    ],
  },
];
