import React from "react";
import './buttons.css'

const Buttons = () => {
  return (
    <div>
      <ul className="navbar-buttons">
        <li className="btn-border"><a href="https://home.personalcapital.com/page/login/goHome">Login</a></li>
        <li className="btn-fill"><a href="https://www.personalcapital.com/sign-up">Sign Up</a></li>
      </ul>
    </div>
  );
};

export default Buttons;
