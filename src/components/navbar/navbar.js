import React from "react";
import './navbar.css'
import Logo from './logo';
import Links from './links';
import Buttons from './buttons';

const NavBar = props => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <Logo/>
        <Links/>
        <Buttons />
      </div>
    </div>
  );
};

export default NavBar;
