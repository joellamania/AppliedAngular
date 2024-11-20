import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
} from '@angular/core';
import { WITHDRAWAL_AMOUNTS } from '../types';
import { AtmStore } from '../services/atm.store';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe],
  template: `
    <p>Your Balance is {{ store.balance() }}</p>
    <div class="grid grid-flow-col gap-8">
      @for (amt of store.amounts(); track amt) {
        <button
          [disabled]="store.balance() < amt"
          (click)="store.withdraw(amt)"
          class="btn btn-primary ring-2 ring-white"
        >
          {{ amt | currency }}
        </button>
      }
    </div>
    @if (store.atBalanceThreshold()) {
      <button>Make Deposit</button>
    }
  `,

  styles: ``,
})
export class WithdrawalComponent {
  store = inject(AtmStore);
}
