import React, { Component } from "react";
import "./GetStarted.css";
import logo from "./logo.png";
import menu from "./menu.png";
import { Link } from "react-scroll";

class GetStarted extends Component {
  constructor() {
    super();
    this.state = {
      on: false
    };
  }

  showMenu = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return (
      <div className="main">
        <img src={logo} className="logo" alt="logo" />
        <div className="login">
          <p className="menubalk">LOG IN</p>
          <p className="menubalk">SIGN UP</p>
          <img src={menu} className="menu" alt="menu" onClick={this.showMenu} />
        </div>
        <div className="started">
          <p className="favorite">Find your Favorite</p>
          <p className="recipes">RECIPES</p>
          <div>
            <Link
              activeClass="active"
              to="cuisines"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <button className="button">GET STARTED</button>
            </Link>
          </div>

          <p className="send">OR SEND US YOU OWN RECEPES AND GET REWARDED</p>
        </div>
        {this.state.on && (
          <div className="toggle">
            <ul>
              <li className="li">home</li>
              <li className="li">Cuisines</li>
              <li className="li">reviews</li>
              <li className="li">Get the app</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default GetStarted;
