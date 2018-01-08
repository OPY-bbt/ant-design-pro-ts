import { delay } from 'redux-saga';
import { take, put } from 'redux-saga/effects';
import { INCREMENT, DECREMENT, ASYNCACTION, increment } from '../actions';

export function* watchINC() {
  while (true) {
    yield take(INCREMENT);
  }
}

export function* watchDEC() {
  while (true) {
    yield take(DECREMENT);
  }
}

export function* watchAsync() {
  while (true) {
    yield take(ASYNCACTION);
    yield delay(3000);
    yield put(increment());
  }
}