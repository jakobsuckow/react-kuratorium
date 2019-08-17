import React from 'react';
import './App.scss';
// Import Slides
import Dates from './Components/Dates';
import Intro from './Components/Intro';
import Releases from './Components/Releases'
import About from './Components/About'

function App() {
  return (
    <div className="row">
      <div className="intro">
        <Intro />
      </div>
      <div className="about">
        <About />
      </div>
      <div className="releases">
        <Releases />
      </div>
      <div className="dates">
        <Dates />

      </div>
    </div>
  );
}

export default App;