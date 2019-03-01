import React, { Component } from "react";
import "./carousel_section.css";
import Slide1 from "../../images/step1_image.png";
import Slide2 from "../../images/step2_image.png";
import Slide3 from "../../images/step3_image.png";

class CarouselSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      slides: [
        {
          header: "STEP ONE",
          title: "Register and Link Accounts",
          body:
            "Connect all of your external financial accounts (IRAs, 401ks, mortgages, loans, checking & savings) and get a comprehensive view of your money. Once you have linked your accounts, schedule a free consultation* with a Personal Capital Advisor.",
          footer:
            "* Personal Capital offers wealth management services for a fixed fee. Learn more >>",
          imgURL: Slide1
        },
        {
          header: "STEP TWO",
          title: "Talk with an Advisor",
          body:
            "We'll discuss your investing goals, risk tolerance, retirement and planning for the big stuff like a new baby, starting a business, saving for college or remodeling your home. During this time, we’ll walk you through our Retirement Planning tool that will help you map out your short and long-term goals.",
          footer: "",
          imgURL: Slide2
        },
        {
          header: "STEP THREE",
          title: "Create Your Plan",
          body:
            "You’ll receive a comprehensive assessment of your entire financial life. We'll help you identify your retirement goals to make sure we build an investment plan that fits your needs. Your Advisor utilizes the most powerful tools in the industry, providing you with deep insights to help you create a personalized, tax-optimized financial plan that will meet your goals.",
          footer: "",
          imgURL: Slide3
        }
      ]
    };
  }

  nextSlide = () =>{
    this.setState({ currentIndex: this.state.currentIndex + 1 });
    console.log(this.state.currentIndex)
  }

  prevSlide = () => {
    this.setState({ currentIndex: this.state.currentIndex - 1 });
    console.log(this.state.currentIndex)
  }

  render() {
    return (
      <div className="carousel-container">
        <h1>How To Get Started</h1>
        <div className="carousel">
          {this.state.currentIndex > 0 ? (
            <div className="arrow left-arrow" onClick={this.prevSlide} />
          ) : null}
          {this.state.currentIndex < 2 ? (
            <div className="arrow right-arrow" onClick={this.nextSlide} />
          ) : null}
          <div className="slider-wrapper">
            {this.state.slides.map(slide => (
              <div className="slide" key={slide.header}>
                <img src={slide.imgURL} alt="slide information" />
                <div className="slide-info">
                  <h2>{slide.header}</h2>
                  <h2>{slide.title}</h2>
                  <p>{slide.body}</p>
                  <p>{slide.footer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="dot-container">
          <ul className="dot-list">
            <li />
            <li />
            <li />
          </ul>
        </div>
      </div>
    );
  }
}

export default CarouselSection;
