import React, {useState} from 'react';
import './App.scss';
// Import Slides
import Dates from './Components/Dates';
import Intro from './Components/Intro';
import Releases from './Components/Releases'
import About from './Components/About'

function App() {
  const [state, setState] = useState(true);

  function toggle() {
    state ? setState(false) : setState(true);
  }
  return (
    <div className={`${state ? 'row' : 'row__shifted' }`}>
      <div className="intro">
        <Intro />
      </div>
      <div className="about">
        <About />
        <button onClick={toggle}>Open Card</button>
      </div>
      <div className="releases">
        <Releases />
      </div>
      <div className="dates">
        <Dates />

      </div>
      <div className="card">
        <h1>hi</h1>
      </div>
    </div>
  );
}

export default App;