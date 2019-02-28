import React from "react";
import "./hero_section.css";

const HeroSection = props => {
  return (
    <div className="hero-container">
      <div className="hero-body-container">
        <h1 className="hero-heading">Track and Manage Your Money</h1>
        <p className="hero-subheading">
          Get the most advanced technology in personal finance, now available
          to&nbsp;everyone.
        </p>
        <div className="btn-fill-container">
          <a
            href="https://www.personalcapital.com/sign-up"
            className="btn-fill"
          >
            Sign Up for Free Tools
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
