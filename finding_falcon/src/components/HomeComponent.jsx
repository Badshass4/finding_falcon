import React from "react";

const HomeComponent = () => {
  return (
    <div className="container vh-100">
      <div className="d-flex justify-content mt-3">
        <h1 className="text-danger pr-2">Hello, </h1>
        <h1>Adventurer!</h1>
      </div>
      <div className="center mt-5">
        <a href="/find" className="btn btn-info">
          Click Now and Find Falcon
        </a>
      </div>
    </div>
  );
};

export default HomeComponent;
