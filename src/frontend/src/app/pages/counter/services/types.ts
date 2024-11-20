export const COUNTER_STEPS = [1, 3, 5] as const;

export type CounterSteps = (typeof COUNTER_STEPS)[number];
