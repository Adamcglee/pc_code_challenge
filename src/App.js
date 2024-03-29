import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import HeroSection from './components/hero_section/hero_section';
import CarouselSection from './components/carousel_section/carousel_section';

class App extends Component {
  render() {
    return (
      <div id="App">
       <NavBar />
       <HeroSection />
       <CarouselSection />
      </div>
    );
  }
}

export default App;
