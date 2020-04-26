import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER
})

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
})
