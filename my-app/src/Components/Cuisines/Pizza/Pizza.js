import React from "react";

import pizza from "./pizza.png";

function Pizza() {
  return (
    <div>
      <div className="picture">
        <img src={pizza} alt="menu" />
        <p className="textimg">tekst</p>
      </div>
    </div>
  );
}

export default Pizza;
