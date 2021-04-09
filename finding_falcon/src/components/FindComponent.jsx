import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchPlanets, fetchVehicles } from "../ducks/actions";
import DestinationComponent from "./DestinationComponent";

const FindComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlanets());
    dispatch(fetchVehicles());
  },[]);
  return (
    <div className="container vh-100">
      <div className="d-flex justify-content mb-3">
        <h1 className="mt-2">Select planet and vehicle to find our falcon !</h1>
      </div>
      <div className="row">
        <DestinationComponent slNo="1" />
        <DestinationComponent slNo="2" />
        <DestinationComponent slNo="3" />
        <DestinationComponent slNo="4" />
      </div>
    </div>
  );
};

export default FindComponent;
