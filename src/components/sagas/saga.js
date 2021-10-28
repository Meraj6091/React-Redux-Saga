import { delay } from "@redux-saga/core/effects";
import { takeLatest, put } from "redux-saga/effects";
/**
 * saga only works inside generator functions
 * */

function* ageUpAsync() {
  yield delay(4000);
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}
export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
}
