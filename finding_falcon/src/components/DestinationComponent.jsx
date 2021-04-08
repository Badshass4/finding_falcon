import React, { useState } from "react";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import TextField from "@material-ui/core/TextField";

const DestinationComponent = () => {
  const [destinations, setDestination] = useState([
    { name: "Donlon", distance: 100 },
    { name: "Enchai", distance: 200 },
    { name: "Jebing", distance: 300 },
    { name: "Sapir", distance: 400 },
    { name: "Lerbin", distance: 500 },
    { name: "Pingasor", distance: 600 },
  ]);

  const [vehicles, setVehicles] = useState([
    { name: "Space pod", total_no: 2, max_distance: 200, speed: 2 },
    { name: "Space rocket", total_no: 1, max_distance: 300, speed: 4 },
    { name: "Space shuttle", total_no: 1, max_distance: 400, speed: 5 },
    { name: "Space ship", total_no: 2, max_distance: 600, speed: 10 },
  ]);

  const [isVehicle, setIsVehicle] = useState(false);

  const handleDestinationChange = () => {
    setIsVehicle(true);
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
          <div class="form-check mt-3">
            <input class="form-check-input" type="radio" key={vehicle.name} name={vehicle.name} />
            <label class="form-check-label" key={vehicle.name}>{vehicle.name+'('+vehicle.total_no+')'}</label>
          </div>
        ))}
    </div>
  );
};

export default DestinationComponent;
