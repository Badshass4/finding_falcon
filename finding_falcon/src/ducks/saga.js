import { all, put, takeEvery, call, select } from "redux-saga/effects";

import { invoke } from "../apiConfig";
import { FETCH_PLANETS, FETCH_VEHICLES, FIND_FALCON } from "./constants";
import {
  fetchPlanetsSuccess,
  fetchPlanetsFailure,
  fetchVehiclesSuccess,
  fetchVehiclesFailure,
} from "./actions";

const getSelectedPlanet = (state) => state.selectedPlanets;
const getSelectedVehicle = (state) => state.selectedVehicles;

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

function* findFalcon(action) {
  try {
    const tokenResponse = yield call(invoke, "/token", {
      method: "POST",
    });
    const token = yield tokenResponse.json();
    const planet_names = yield select(getSelectedPlanet);
    const vehicle_names = yield select(getSelectedVehicle);
    const response = yield call(invoke, "/find", {
      method: "POST",
      body: {
        token: token.token,
        planet_names,
        vehicle_names,
      },
    });
    console.log(response.json().status);
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_PLANETS, getPlanets),
    takeEvery(FETCH_VEHICLES, getVehicles),
    takeEvery(FIND_FALCON, findFalcon),
  ]);
}
