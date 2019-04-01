import { put, takeLatest, all } from "redux-saga/effects";
import { loadedRestaurant } from "../actions/listView.actions";

export function* loadData() {
  const data = yield fetch("http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json").then(resp => resp.json());
  yield put(loadedRestaurant(data.restaurants));
}

export default function* rootSaga() {
  yield all([takeLatest("LOAD_RESTAURANTS", loadData)]);
}
