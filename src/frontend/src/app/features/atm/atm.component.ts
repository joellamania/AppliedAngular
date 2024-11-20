import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <div class="flex gap-8">
      <a class="btn btn-primary" routerLink="withdrawal">withdrawal</a>
    </div>
  `,
  styles: ``,
})
export class AtmComponent {}
