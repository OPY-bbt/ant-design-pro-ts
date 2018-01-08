import { fork, all } from 'redux-saga/effects';
import { watchINC, watchDEC, watchAsync } from './count';

export default function* rootSaga() {
  yield all([
    fork(watchINC),
    fork(watchDEC),
    fork(watchAsync),
  ]);
}