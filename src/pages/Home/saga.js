import { put, call, take } from "redux-saga/effects";
import { DogsTypes } from "./types";
import { getDogSuccess, getDogFail } from "./actions";

export function* getDogStart(api) {
  while (true) {
    yield take(DogsTypes.GET_DOG_REQUEST);
    yield call(getDogSaga, api);
  }
}

export function* getDogSaga(api) {
  try {
    const res = yield call(api.dog);
    console.log(res);
    yield put(getDogSuccess(res));
  } catch (error) {
    yield put(getDogFail(error));
  }
}
