import React from "react";
import CountUp from "react-countup";
import "./Counter.css";

function Counter() {
  return (
    <div className="counter">
      <div>
        <CountUp
          className="countup"
          end={23.567}
          duration={3}
          decimals={3}
          decimal=","
        ></CountUp>
        <h5 className="ctext">Recipes Available</h5>
      </div>
      <div>
        <CountUp
          className="countup"
          end={(431, 729)}
          duration={3}
          decimals={3}
          decimal=","
        ></CountUp>
        <h5 className="ctext">Active Users</h5>
      </div>
      <div>
        <CountUp
          className="countup"
          end={892.173}
          duration={3}
          decimals={3}
          decimal=","
        ></CountUp>
        <h5 className="ctext">Positive Reviews</h5>
      </div>
      <div>
        <CountUp
          className="countup"
          end={56.581}
          duration={3}
          decimals={3}
          decimal=","
        ></CountUp>
        <h5 className="ctext">Photos and Videos</h5>
      </div>
      <div>
        <CountUp
          className="countup"
          end={3.182}
          duration={3}
          decimals={3}
          decimal=","
        ></CountUp>
        <h5 className="ctext">Spices and Herbs</h5>
      </div>
    </div>
  );
}

export default Counter;
