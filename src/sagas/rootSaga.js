import { all } from "redux-saga/effects";
import { api as getDogApi } from "../api/getDogApi";
import { getDogStart } from "../pages/Home/saga";

function* rootSaga() {
  yield all([getDogStart(getDogApi)]);
}

export default rootSaga;
