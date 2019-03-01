import React, { Component } from "react";
import "./carousel_section.css";

class CarouselSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {
          header: "STEP ONE",
          title: "Register and Link Accounts",
          body:
            "Connect all of your external financial accounts (IRAs, 401ks, mortgages, loans, checking & savings) and get a comprehensive view of your money. Once you have linked your accounts, schedule a free consultation* with a Personal Capital Advisor.",
          footer:
            "* Personal Capital offers wealth management services for a fixed fee. Learn more >>",
          imgURL: "../../images/step1_image.png"
        },
        {
          header: "STEP TWO",
          title: "Talk with an Advisor",
          body:
            "We'll discuss your investing goals, risk tolerance, retirement and planning for the big stuff like a new baby, starting a business, saving for college or remodeling your home. During this time, we’ll walk you through our Retirement Planning tool that will help you map out your short and long-term goals.",
          footer: "",
          imgURL: "../../images/step2_image.png"
        },
        {
          header: "STEP THREE",
          title: "Create Your Plan",
          body:
            "You’ll receive a comprehensive assessment of your entire financial life. We'll help you identify your retirement goals to make sure we build an investment plan that fits your needs. Your Advisor utilizes the most powerful tools in the industry, providing you with deep insights to help you create a personalized, tax-optimized financial plan that will meet your goals.",
          footer: "",
          imgURL: "../../images/step3_image.png"
        }
      ]
    };
  }
  render() {
    return (
      <div className="carousel-container">
        <h1>How To Get Started</h1>
        <div className="carousel">
          <div className="slide-wrapper">
            {this.state.slides.map(slide => (
              <div className="slide">
                <img src={slide.imgURL} alt="slide picture" />
                <h2>{slide.header}</h2>
                <h2>{slide.title}</h2>
                <p>{slide.body}</p>
                <p>{slide.footer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselSection;
