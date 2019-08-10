import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dates from './Components/Dates'

function App() {
  return (
    <div className="row">
      <div>This is the first div</div>
      <div>second</div>
      <div>third</div>
      <div>
        <Dates />

      </div>
    </div>
  );
}

export default App;
