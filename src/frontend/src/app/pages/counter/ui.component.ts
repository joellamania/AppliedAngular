import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
} from '@angular/core';
import { CounterPrefStore } from './services/counter-prefs.service';

@Component({
  selector: 'app-counter-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div data-testid="counter-feature-ui">
      <button
        class="btn btn-primary"
        (click)="store.stepDown()"
        [disabled]="store.count() < store.step()"
      >
        -
      </button>
      <span data-testid="current" class="p-6">{{ store.count() }}</span>
      <button class="btn btn-primary" (click)="store.stepUp()">+</button>
    </div>
    <div>
      <p data-testid="fizzBuzz" class="p-6">{{ store.fizzBuzz() }}</p>
    </div>
  `,
  styles: ``,
})
export class UiComponent {
  store = inject(CounterPrefStore);
}
