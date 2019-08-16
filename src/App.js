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
      <div>
        <Intro />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Releases />
      </div>
      <div>
        <Dates />

      </div>
    </div>
  );
}

export default App;
