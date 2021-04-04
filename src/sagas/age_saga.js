import { takeLatest, put } from "redux-saga/effects";
import { delay } from "redux-saga/effects";

function* ageUp() {
  yield delay(1000);
  yield put({ type: "ADD_ASYNC" });
}

export function* watchAgeup() {
  yield takeLatest("ADD", ageUp);
}
