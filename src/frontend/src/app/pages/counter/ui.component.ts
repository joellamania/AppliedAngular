import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-counter-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div data-testid="counter-feature-ui">
      <button
        class="btn btn-primary"
        (click)="substract()"
        [disabled]="this.counter() < 1"
      >
        -
      </button>
      <span data-testid="current" class="p-6">{{ this.counter() }}</span>
      <button class="btn btn-primary" (click)="add()">+</button>
    </div>
    <div>
      <p data-testid="fizzBuzz" class="p-6">{{ this.fizzBuzz() }}</p>
    </div>
  `,
  styles: ``,
})
export class UiComponent {
  counter = signal(0);
  step = 1;
  fizzBuzz = computed(() => {
    let currCounter = this.counter();
    if (currCounter > 0) {
      if (currCounter % 3 === 0 && currCounter % 5 === 0) {
        return 'FizzBuzz';
      } else if (currCounter % 3 === 0) {
        return 'Fizz';
      } else if (currCounter % 5 === 0) {
        return 'Buzz';
      } else {
        return '';
      }
    } else {
      return '';
    }
  });
  substract() {
    if (this.counter() > 0) {
      this.counter.update(() => this.counter() - this.step);
    }
  }
  add() {
    this.counter.update(() => this.counter() + this.step);
  }
}
