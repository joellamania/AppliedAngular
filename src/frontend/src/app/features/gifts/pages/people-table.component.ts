import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { StatusBarComponent } from '../components/status-bar.component';
import { PeopleStore } from '../services/people.store';

@Component({
  selector: 'app-gifts-people',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TitleCasePipe, StatusBarComponent],
  providers: [],
  template: `
    <app-gifts-status-bar />

    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          @for (p of store.entities(); track p.id) {
            <tr>
              <th>{{ p.id }}</th>
              <td>{{ p.name }}</td>
              <td>{{ p.location | titlecase }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: ``,
})
export class PeopleTableComponent {
  store = inject(PeopleStore);
}
