import React from 'react';
import './App.scss';
// Import Slides
import Dates from './Components/Dates';
import Intro from './Components/Intro';

function App() {
  return (
    <div className="row">
      <div>
        <Intro />
      </div>
      <div>second</div>
      <div>third</div>
      <div>
        <Dates />

      </div>
    </div>
  );
}

export default App;
