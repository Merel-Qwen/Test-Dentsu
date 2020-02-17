import React from "react";

import steakhouse from "./steakhouse.png";

function Steakhouse() {
  return (
    <div className="picture">
      <img src={steakhouse} alt="menu" />
      <p className="textimg">tekst</p>
    </div>
  );
}

export default Steakhouse;
