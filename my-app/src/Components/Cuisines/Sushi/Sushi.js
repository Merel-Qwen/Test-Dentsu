import React from "react";

import sushi from "./sushi.png";

function Sushi() {
  return (
    <div className="picture">
      <img src={sushi} alt="menu" />
      <p className="textimg">tekst</p>
    </div>
  );
}

export default Sushi;
