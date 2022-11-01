import React, { FC } from 'react';
import Data from './DataModel/Wine-Data.json'
import Scatter from './Components/Scatter';
import BarGraph from './Components/BarGraph';
import './App.css';

/* Get data for Scatter Plot */ */
function getAlcoholColorHueData() : number[][] {
  const alcoholColorHue : number[][] = [];

  Data.forEach((element) => {
    let colorHue : number[] = [];
    let colorIntensity : number = 0;

    if(typeof element['Color intensity'] === 'string'){
      colorIntensity = parseInt(element['Color intensity'])
    }
    else{
      colorIntensity = element['Color intensity'];
    }

    colorHue.push(colorIntensity);
    colorHue.push(element.Hue);
;
    alcoholColorHue.push(colorHue);
  })

  return alcoholColorHue;
}

/* Get data for Bar Chart*/
function getAlcoholMalicAcidData() : number[][] {
  const alcoholMalicAcid : number[][] = [];

  Data.forEach((element) =>{
    if(element.Alcohol > alcoholMalicAcid.length){
        let malicAcid : number[] = [];
        alcoholMalicAcid.push(malicAcid);
    }

    alcoholMalicAcid[element.Alcohol - 1].push(element['Malic Acid']);
  })

  return alcoholMalicAcid
}

/* Find Malic Acid Average */
function getAlcoholMalicAcidAverage(alcoholMalicAcid : number[][]) : number[] {
  const alcoholMalicAcidAverage : number[] = [];

  alcoholMalicAcid.forEach((element) =>{
    let malicAcidSum : number = 0;

    for (let index : number = 0; index < element.length; index++){
        malicAcidSum += element[index];
    }

    let malicAcidAverage = malicAcidSum/(element.length)
    alcoholMalicAcidAverage.push(malicAcidAverage)
  })

  return alcoholMalicAcidAverage;
}


function App() {

const alcoholMalicArray : number[][] = getAlcoholMalicAcidData();
const alcoholMalicArrAverage : number[] = getAlcoholMalicAcidAverage(alcoholMalicArray);
const alcoholColorHue = getAlcoholColorHueData();
const alcoholMalicIndexArray : number[] = [];

for (let index : number = 1; index <= alcoholMalicArrAverage.length; index++){      //index array for Bar Chart
  alcoholMalicIndexArray.push(index)
}

  return (
    <div className="App">
      <BarGraph indexAlcohol={alcoholMalicIndexArray} dataAlcohol={alcoholMalicArrAverage}/>
      <Scatter scatterAlcohol={alcoholColorHue}/>
    </div>
  );
}

export default App;
