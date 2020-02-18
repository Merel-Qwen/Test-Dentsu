import React from "react";

import Data from "./Data";

function Cuisines() {
  return (
    <div>
      <h2 className="browse">BROWSE BY CUISINE</h2>
      <div className="cuisines" id="cuisines">
        {Data.map(item => (
          <div className="recipeItem" key={item.id}>
            <img src={item.url} alt={item.title} />

            <div className="recipeContent">
              <p>{item.number} Recipes</p>
              <h4>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cuisines;
