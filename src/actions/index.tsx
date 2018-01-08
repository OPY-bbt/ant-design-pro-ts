export const INCREMENT = 'INCREMENT';
export type INCREMENT = typeof INCREMENT;

export const DECREMENT = 'DECREMENT';
export type DECREMENT = typeof DECREMENT;

export const ASYNCACTION = 'ASYNCACTION';
export type ASYNCACTION = typeof ASYNCACTION;

export interface Increment {
  type: INCREMENT;
}

export interface Decrement {
  type: DECREMENT;
}

export interface AsyncAction {
  type: ASYNCACTION;
}

export type Action = Increment | Decrement | AsyncAction;

export function increment(): Increment {
  return {
    type: INCREMENT
  };
}

export function decrement(): Decrement {
  return {
    type: DECREMENT
  };
}

export function asyncAction(): AsyncAction {
  return {
    type: ASYNCACTION
  };
}