import React from "react";
import "./GetInspired.css";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";

function GetInspired() {
  return (
    <div className="inspired">
      <div className="container">
        <div className="picture">
          <img src={icon1} className="icon" alt="menu" />
          <div className="line">
            <h3>GET INSPIRED</h3>
            <span></span>
          </div>

          <p className="tekst">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed do eiusmod temport labore et dolore magna aliqua.
            <br />
            Condimentum id venenatis.
          </p>
        </div>
        <div className="picture">
          <img src={icon2} className="icon2" alt="menu" />
          <div className="line">
            <h3>GET REWARDED</h3>
            <span></span>
          </div>

          <p className="tekst">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed do eiusmod temport labore et dolore magna aliqua.
            <br />
            Condimentum id venenatis.
          </p>
        </div>
        <div className="picture">
          <img src={icon3} className="icon" alt="menu" />
          <div className="line">
            <h3>GET SOCIAL</h3>
            <span></span>
          </div>

          <p className="tekst">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed do eiusmod temport labore et dolore magna aliqua.
            <br />
            Condimentum id venenatis..
          </p>
        </div>
      </div>
    </div>
  );
}

export default GetInspired;
