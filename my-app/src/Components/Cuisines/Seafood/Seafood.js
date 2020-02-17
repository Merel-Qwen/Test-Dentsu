import React from "react";

import seafood from "./seafood.png";

function Seafood() {
  return (
    <div className="picture">
      <img src={seafood} alt="menu" />
      <p className="textimg">tekst</p>
    </div>
  );
}

export default Seafood;
