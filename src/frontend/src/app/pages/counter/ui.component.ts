import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

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
  `,
  styles: ``,
})
export class UiComponent {
  counter = signal(0);
  step = 1;
  substract() {
    if (this.counter() > 0) {
      this.counter.update(() => this.counter() - this.step);
    }
  }
  add() {
    this.counter.update(() => this.counter() + this.step);
  }
}
