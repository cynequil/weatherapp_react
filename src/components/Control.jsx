import React from "react";
import Autocomplete from "./Autocomplete";
import Currentlocation from "./Currentlocation";

const Control = () => {
  return (
    <div className="box control">
      <Currentlocation />
      <Autocomplete />
    </div>
  );
};

export default Control;
