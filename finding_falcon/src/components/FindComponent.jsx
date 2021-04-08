import React from "react";

import DestinationComponent from "./DestinationComponent";

const FindComponent = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content mb-3">
        <h1 className="mt-2">Select planet and vehicle to find our falcon !</h1>
      </div>
      <div className="row">
        <DestinationComponent />
        <DestinationComponent />
        <DestinationComponent />
        <DestinationComponent />
      </div>
    </div>
  );
}

export default FindComponent;
