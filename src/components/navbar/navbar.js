import React, { Component } from "react";
import "./navbar.css";
import Logo from "./logo";
import Links from "./links";
import Buttons from "./buttons";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: false
    }
  }

  componentDidMount() {
    this.setState({ change: false })
  }

  barswitch = () => {
    this.setState({ change: !this.state.change });
  };

  render() {
    console.log(this.state.change);
    return (
      <div className="navbar-container">
        <div className="navbar">
          <Logo />
          <Links />
          <Buttons />
          <div className={this.state.change === false ? "menu-button" : "menu-button change"} onClick={this.barswitch}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
        </div>
        <div className={this.state.change === false ? "hamburger-closed": "hamburger-open"}>
          <ul className="hamburger-list">
            <div className="hamburger-links">
              <li>
                <a href="https://www.personalcapital.com/financial-software">
                  Financial Tools
                </a>
              </li>
              <li>
                <a href="https://www.personalcapital.com/wealth-management">
                  Wealth Management
                </a>
              </li>
              <li>
                <a href="personalcapital.com/company">About</a>
              </li>
              <li>
                <a href="https://www.personalcapital.com/blog/">Resources</a>
              </li>
            </div>
            <div className="hamburger-buttons">
              <li>
                <a href="https://home.personalcapital.com/page/login/goHome">
                  Login
                </a>
              </li>
              <li>
                <a href="https://www.personalcapital.com/sign-up">Sign Up</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
