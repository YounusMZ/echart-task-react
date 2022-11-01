import React from 'react';
import Data from './DataModel/Wine-Data.json'
import Scatter from './Components/Scatter';
import BarGraph from './Components/BarGraph';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>{Data[0].Alcohol}</p>
      <BarGraph />
      <Scatter />
    </div>
  );
}

export default App;
