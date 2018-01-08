import { combineReducers } from 'redux';

import { countState } from '../types';
import { INCREMENT, DECREMENT, Action } from '../actions';

const counter = (state: countState = { count: 10 }, action: Action) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + 1};
    case DECREMENT:
      return {...state, count: state.count - 1};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;