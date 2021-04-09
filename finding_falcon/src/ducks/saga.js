import { all, put, takeEvery, call } from "redux-saga/effects";

import { invoke } from "../apiConfig";
import { FETCH_PLANETS, FETCH_VEHICLES } from "./constants";
import {
  fetchPlanetsSuccess,
  fetchPlanetsFailure,
  fetchVehiclesSuccess,
  fetchVehiclesFailure,
} from "./actions";

function* getPlanets(action) {
  try {
    const response = yield call(invoke, "/planets", {
      method: "GET",
    });
    const data = yield response.json();
    yield put(fetchPlanetsSuccess(data));
  } catch (error) {
    yield put(fetchPlanetsFailure(error));
  }
}

function* getVehicles(action) {
  try {
    const response = yield call(invoke, "/vehicles", {
      method: "GET",
    });
    const data = yield response.json();
    yield put(fetchVehiclesSuccess(data));
  } catch (error) {
    yield put(fetchVehiclesFailure(error));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_PLANETS, getPlanets),
    takeEvery(FETCH_VEHICLES, getVehicles),
  ]);
}
