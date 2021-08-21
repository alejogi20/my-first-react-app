import logo from './logo.svg';
import './App.css';
import React from 'react';
import reactDom from 'react-dom';

let defaultSlides = require('./defaultSlides.js');

function Slides({slides}){
  return(
    <section className="Slides">
      {slides.map(
        (currentSlide, index) => (
          <div key={currentSlide.title} className="slide">
            <h1>
              {currentSlide.title}
            </h1>
            <h2>
              {currentSlide.subtitle}
            </h2>
            <img src={currentSlide.image}/>
          </div>
        )
      )}
    </section>
  );
}

function Slider({slides}){
  return(
    <section className="Slider">
      <Slides slides= {slides} className="Slides"></Slides>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Slider slides={defaultSlides.array} />        
      </header>
    </div>
  );
}

export default App;
