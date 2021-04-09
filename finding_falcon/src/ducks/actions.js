import {
  FETCH_PLANETS,
  FETCH_PLANETS_FAILURE,
  FETCH_PLANETS_SUCCESS,
  FETCH_VEHICLES,
  FETCH_VEHICLES_FAILURE,
  FETCH_VEHICLES_SUCCESS,
  SET_VEHICLE_NUM,
  SELECT_PLANETS,
  FIND_FALCON,
} from "./constants";

export const fetchPlanets = () => ({
  type: FETCH_PLANETS,
});

export const fetchPlanetsSuccess = (planets) => ({
  type: FETCH_PLANETS_SUCCESS,
  payload: planets,
});

export const fetchPlanetsFailure = (error) => ({
  type: FETCH_PLANETS_FAILURE,
  payload: error,
});

export const fetchVehicles = () => ({
  type: FETCH_VEHICLES,
});

export const fetchVehiclesSuccess = (vehicles) => ({
  type: FETCH_VEHICLES_SUCCESS,
  payload: vehicles,
});

export const fetchVehiclesFailure = (error) => ({
  type: FETCH_VEHICLES_FAILURE,
  payload: error,
});

export const setVehicleNum = (name) => ({
  type: SET_VEHICLE_NUM,
  payload: name,
});

export const selectPlanets = (pname, slNo) => ({
  type: SELECT_PLANETS,
  payload: { pname, slNo },
});

export const findFalcon = () => ({
  type: FIND_FALCON,
});
