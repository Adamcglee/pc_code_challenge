import React, { Component } from "react";
import "./carousel_section.css";
import Slide1 from "../../images/step1_image.png";
import Slide2 from "../../images/step2_image.png";
import Slide3 from "../../images/step3_image.png";
import Slide1Sm from "../../images/step1_image_small.png";
import Slide2Sm from "../../images/step2_image_small.png";
import Slide3Sm from "../../images/step3_image_small.png";

class CarouselSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      isMobile: false,
      slides: [
        {
          header: "STEP ONE",
          title: "Register and Link Accounts",
          body:
            "Connect all of your external financial accounts (IRAs, 401ks, mortgages, loans, checking & savings) and get a comprehensive view of your money. Once you have linked your accounts, schedule a free consultation* with a Personal Capital Advisor.",
          footer:
            "* Personal Capital offers wealth management services for a fixed fee. Learn more >>",
          imgURL: Slide1,
          smallimgURL: Slide1Sm
        },
        {
          header: "STEP TWO",
          title: "Talk with an Advisor",
          body:
            "We'll discuss your investing goals, risk tolerance, retirement and planning for the big stuff like a new baby, starting a business, saving for college or remodeling your home. During this time, we’ll walk you through our Retirement Planning tool that will help you map out your short and long-term goals.",
          footer: "",
          imgURL: Slide2,
          smallimgURL: Slide2Sm
        },
        {
          header: "STEP THREE",
          title: "Create Your Plan",
          body:
            "You’ll receive a comprehensive assessment of your entire financial life. We'll help you identify your retirement goals to make sure we build an investment plan that fits your needs. Your Advisor utilizes the most powerful tools in the industry, providing you with deep insights to help you create a personalized, tax-optimized financial plan that will meet your goals.",
          footer: "",
          imgURL: Slide3,
          smallimgURL: Slide3Sm
        }
      ]
    };
  }

  componentDidMount() {
    if (window.innerWidth <= 768) {
      this.setState({ isMobile: true })
    } else {
      this.setState({ isMobile: false })
    }
  }

  nextSlide = () => {
    this.setState({ currentIndex: this.state.currentIndex + 1 });
  };

  prevSlide = () => {
    this.setState({ currentIndex: this.state.currentIndex - 1 });
  };

  setIndex = index => {
    this.setState({ currentIndex: index });
  };

  render() {
    console.log(this.state.isMobile);
    return (
      <div className="carousel-container">
        <h1 className="carousel-title">How To Get Started</h1>
        <div className="carousel">
          <div
            className={
              this.state.currentIndex > 0
                ? "arrow left-arrow"
                : "arrow-hidden left-arrow-hidden"
            }
            onClick={this.prevSlide}
          />
          <div
            className={
              this.state.currentIndex < 2
                ? "arrow right-arrow"
                : "arrow-hidden right-arrow-hidden"
            }
            onClick={this.nextSlide}
          />
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(-${this.state.currentIndex *
                (100 / this.state.slides.length)}%)`
            }}
          >
            {this.state.slides.map((slide, index) => (
              <div
                className={
                  this.state.currentIndex !== index ? "slide" : "visable"
                }
                key={slide.header}
              >
                <img className={`slide-img${index}`}src={this.state.isMobile === false ? slide.imgURL : slide.smallimgURL} alt="slide information" />
                <div className="slide-info">
                  <h2 className={`header-slide${index}`}>{slide.header}</h2>
                  <h2 className="slide-title">{slide.title}</h2>
                  <p className="slide-body">{slide.body}</p>
                  <p className="slide-footer">{slide.footer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="dot-container">
          <ul className="dot-list">
            <li
              className={this.state.currentIndex === 0 ? "filled" : "dot"}
              onClick={() => this.setIndex(0)}
            />
            <li
              className={this.state.currentIndex === 1 ? "filled" : "dot"}
              onClick={() => this.setIndex(1)}
            />
            <li
              className={this.state.currentIndex === 2 ? "filled" : "dot"}
              onClick={() => this.setIndex(2)}
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default CarouselSection;
