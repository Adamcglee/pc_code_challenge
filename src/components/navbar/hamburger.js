import React from "react";
import './hamburger.css';

const Hamburger = () => {
  return (
    <div className="hamburger-container">
      <ul>
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
          <li >
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
  );
};

export default Hamburger;
