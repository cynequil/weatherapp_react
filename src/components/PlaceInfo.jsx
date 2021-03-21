import React from "react";

const PlaceInfo = ({ name, coordinates, data }) => {
  return (
    <div className="placeInfo">
      <h1>{name}</h1>
      <h5>Coordinates</h5>
      <p>
        <span className="bold">Lat:</span> {coordinates[0].toPrecision(8)}
      </p>
      <p>
        <span className="bold">Long:</span> {coordinates[1].toPrecision(8)}
      </p>
    </div>
  );
};

export default PlaceInfo;
