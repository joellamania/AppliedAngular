import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterPrefStore } from './services/counter-prefs.service';

@Component({
  selector: 'app-counter-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>Select a counter step</p>
    @for (step of this.store.stepList(); track step) {
      <button
        (click)="store.setStep(step)"
        class="btn btn-primary ring-2 ring-white m-8"
      >
        {{ step }}
      </button>
    }
    <div>Step selected: {{ store.step() }}</div>
  `,
  styles: ``,
})
export class PrefsComponent {
  store = inject(CounterPrefStore);
}
