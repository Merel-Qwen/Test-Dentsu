import React from "react";
import Counter from "./Counter/Counter";
import GetStarted from "./GetStarted/GetStarted";
import Slider from "./Slider/Slider";
import Cuisines from "./Cuisines/Cuisines";
import Connect from "./Connect/Connect";
import GetInspired from "./GetInspired/GetInspired";

function Overview() {
  return (
    <div>
      <GetStarted />
      <GetInspired />
      <Connect />
      <Slider />
      <Cuisines />
      <Counter />
    </div>
  );
}

export default Overview;
