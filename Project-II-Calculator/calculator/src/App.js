import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';



const display = [ {text: 0}]

const actionTop =  [ {text: 'clear', style: 'action'}, {text: '/', style: 'red'} 
]
const topCalc = [ {text: '7'}, {text: '8'}, {text: '9'}, {text: 'x', style: 'red'} ]

const midCalc = [ {text: '4'}, {text: '5'}, {text: '6'}, {text: '-', style: 'red'} ]

const bottomCalc = [ {text: '7'}, {text: '8'}, {text: '9'}, {text: 'x', style: 'red'} ]

const actionBottom =  [ {text: '0', style: 'action'}, {text: '=', style: 'red'} ]

const App = () => {
  return (
    <div className = 'calculator'>
      <div className = 'display'> 
        {display.map(number=> <CalculatorDisplay text = {number.text} />)}
      </div>
      <div className = 'buttonsContainer'>
        <div className ='actionTop'> 
          {actionTop.map(number => <ActionButton text = {number.text} style = {number.style}/>)}
        </div>
        <div className= "topCalc"> 
        {topCalc.map(number => <NumberButton text = {number.text} style = {number.style}  />)}
        </div> 
        <div className ='midCalc'>
          {midCalc.map(number => <NumberButton text = {number.text}  style = {number.style}/>)}
        </div> 
        <div className ='bottomCalc'>
          {bottomCalc.map(number => <NumberButton text = {number.text}  style = {number.style}/>)}
        </div> 
        <div className ='actionBottom'> 
          {actionBottom.map(number => <ActionButton text = {number.text} style = {number.style} />)}
        </div>
      </div>

    </div>

  );
}

export default App;
