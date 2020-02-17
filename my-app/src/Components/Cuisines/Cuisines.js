import React from "react";
import French from "./French/French";
import Indian from "./Indian/Indian";
import American from "./American/American";
import Chinese from "./Chinese/Chinese";
import Seafood from "./Seafood/Seafood";
import Italian from "./Italian/Italian";
import Steakhouse from "./Steakhouse/Steakhouse";
import Sushi from "./Sushi/Sushi";
import Mexican from "./Mexican/Mexican";
import Pizza from "./Pizza/Pizza";

import "./Cuisines.css";

function Cuisines() {
  return (
    <div>
      <h2 className="browse">BROWSE BY CUISINE</h2>
      <div className="cuisines" id="cuisines">
        <Italian className="item1" />
        <Indian className="item2" />
        <French className="item3" />
        <Steakhouse className="item4" />
        <Seafood className="item5" />
        <Sushi className="item6" />
        <Mexican className="item7" />
        <Chinese className="item8" />
        <Pizza className="item9" />
        <American className="item10" />
      </div>
    </div>
  );
}

export default Cuisines;
