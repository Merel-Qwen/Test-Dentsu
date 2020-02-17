import React from "react";
import iPhone from "./iPhone.png";
import App from "./App.png";
import Nav from "./Nav.png";
import Google from "./Google.png";
import "./Connect.css";

function Connect() {
  return (
    <div className="connect">
      <div className="mobile">
        <img src={iPhone} className="phone" alt="menu" />
        <img src={Nav} className="nav" alt="menu" />
      </div>
      <div className="intro">
        <h5 className="introducing"> INTRODUCING THE FUDI APP</h5>
        <p className="intotekst">
          Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
          <br />
          sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
          <br /> Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
          lorem.
        </p>
        <p className="intotekst">
          Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
          <br />
          ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci{" "}
          <br />
          eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet
          <br />
          nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum.
        </p>

        <p className="intotekst">
          Augue velit cursus nunc, quis gravida magna mi a libero.
          <br />
          Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque
          <br />
          ut, mollis sed, nonummy id, metus.{" "}
        </p>

        <img src={App} className="store" alt="menu" />
        <img src={Google} className="store" alt="menu" />
      </div>
    </div>
  );
}

export default Connect;
