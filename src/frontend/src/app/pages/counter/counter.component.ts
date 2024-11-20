import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div data-testid="counter-feature">Counter Stuff Goes Here</div>
    <a class="link" routerLink="ui">UI</a>
    <router-outlet />
  `,
  styles: ``,
})
export class CounterComponent {}
