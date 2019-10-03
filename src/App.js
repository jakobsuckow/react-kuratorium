import React from 'react'
import './App.scss';
// Import Slides
import Intro from './Components/Intro';
import About from './Components/About'
import Projects from './Components/Projects'
import Feed from './Components/Feed'


function App() {
  return (
    <div className="row">
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