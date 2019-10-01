import React, {useState} from 'react'
import './App.scss';
// Import Slides
import Intro from './Components/Intro';
import About from './Components/About'
import Projects from './Components/Projects'
import Feed from './Components/Feed'


function App() {
  const [state, setState] = useState(true);
  function toggle() {
    state ? setState(false) : setState(true);
  }
  return (
    <div className={`row ${state ? '' : 'shifted' }`}>
      <div className="intro">
        <Intro />
      </div>
      <div className="about">
        <About />
      </div>
      <div className="projects">
        <Projects />
      </div>
      <div className="feed">
        <Feed />

      </div>
      <div className="card">
        <h1>hi</h1>
      </div>
    </div>
  );
}

export default App;