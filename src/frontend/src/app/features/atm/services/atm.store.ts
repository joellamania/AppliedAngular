import {
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { WITHDRAWAL_AMOUNTS, WithdrawAmount } from '../types';
import { computed } from '@angular/core';

export const AtmStore = signalStore(
  withState({
    balance: 500.23,
    amounts: WITHDRAWAL_AMOUNTS,
  }),
  withMethods((store) => {
    return {
      withdraw(amount: WithdrawAmount) {
        patchState(store, { balance: store.balance() - amount });
      },
    };
  }),
  withComputed((store) => {
    return {
      atBalanceThreshold: computed(() => store.balance() < 50),
    };
  }),
  withHooks({
    onInit(store) {
      watchState(store, (state) => {
        const savedBalance = localStorage.getItem('balance');
        if (savedBalance !== null) {
          patchState(store, { balance: +savedBalance });
        }
        localStorage.setItem('balance', state.balance.toString());
      });
    },
  }),
);