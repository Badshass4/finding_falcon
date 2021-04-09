import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import TextField from "@material-ui/core/TextField";

import { setVehicleNum, selectPlanets } from "../ducks/actions";

const DestinationComponent = (props) => {
  const { slNo } = props;
  const dispatch = useDispatch();

  const destinations = useSelector((state) => state.planets);
  const vehicles = useSelector((state) => state.vehicles);
  const selectedPlanets = useSelector((state) => state.selectedPlanets);
  // const selectedVehicles = useSelector((state) => state.selectedVehicles);

  const [isVehicle, setIsVehicle] = useState(false);
  const [isVehicleDisable, setIsVehicleDisable] = useState(false);

  const handleDestinationChange = (event) => {
    const planet = event.target.value;
    const { slNo } = props;
    setIsVehicle(true);
    dispatch(selectPlanets(planet, slNo));
  };
  const handleVehicleClick = (event) => {
    const vehicle = event.target.value;
    dispatch(setVehicleNum(vehicle));
    setIsVehicleDisable(true);
  };

  return (
    <div className="col-3">
      <select
        className="custom-select"
        id="destinations"
        onChange={handleDestinationChange}
      >
        <option value="">Choose...</option>
        {destinations.map((destination) => (
          <option value={destination.name} key={destination.name}>
            {destination.name}
          </option>
        ))}
      </select>
      {isVehicle &&
        vehicles.map((vehicle) => (
          <div className="form-check mt-3">
            <input
              className="form-check-input"
              type="radio"
              key={vehicle && vehicle.name}
              name={slNo}
              onChange={handleVehicleClick}
              value={vehicle && vehicle.name}
              disabled={isVehicleDisable || vehicle.total_no === 0}
            />
            {vehicle && vehicle.name + "(" + vehicle.total_no + ")"}
          </div>
        ))}
    </div>
  );
};

export default DestinationComponent;
