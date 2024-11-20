import {
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { COUNTER_STEPS, CounterSteps } from './types';
import { computed } from '@angular/core';

let storedCount = parseInt(localStorage.getItem('count') ?? '0') ?? 0;
export const CounterPrefStore = signalStore(
  withState({
    step: 1,
    count: storedCount,
    stepList: COUNTER_STEPS,
  }),
  withMethods((store) => {
    return {
      setStep(step: CounterSteps) {
        patchState(store, { step: step });
      },
      stepUp() {
        patchState(store, { count: store.count() + store.step() });
      },
      stepDown() {
        patchState(store, {
          count:
            store.count() - store.step() >= 0
              ? store.count() - store.step()
              : store.count(),
        });
      },
    };
  }),
  withComputed((store) => {
    return {
      fizzBuzz: computed(() => {
        let currCounter = store.count();
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
      }),
    };
  }),
  withHooks({
    onInit(store) {
      const savedBalance = localStorage.getItem('count');

      if (savedBalance !== null) {
        patchState(store, { count: +savedBalance });
      }
      watchState(store, (state) => {
        localStorage.setItem('count', state.count.toString());
      });
    },
  }),
);
