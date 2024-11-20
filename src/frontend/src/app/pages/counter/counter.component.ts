import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div data-testid="counter-feature" class="m-10">
      Counter Stuff Goes Here
    </div>
    <a class="link m-10" routerLink="ui">UI</a>
    <a class="link m-10" routerLink="prefs">Counter Preference</a>
    <div class="m-10">
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class CounterComponent {}
