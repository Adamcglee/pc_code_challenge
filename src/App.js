import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import HeroSection from './components/hero_section';
import CarouselSection from './components/carousel_section';

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar />
       <HeroSection />
       <CarouselSection />
      </div>
    );
  }
}

export default App;
