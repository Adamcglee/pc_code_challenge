import React from "react";
import './navbar.css'
import Logo from './logo';

const NavBar = props => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <Logo/>
        <div>
          <ul className="navbar-links">
            <li>Financial Tools</li>
            <li>Wealth Management</li>
            <li>About</li>
            <li>Resources</li>
          </ul>
        </div>
        <div>
          <ul className="navbar-buttons">
              <li className="btn-border">Login</li>
              <li className="btn-fill">Sign Up</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
