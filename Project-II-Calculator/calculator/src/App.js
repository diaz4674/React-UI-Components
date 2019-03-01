import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton'

const App = () => {
  return (
    <div className = 'calculator'>
      <div className = 'topNums'>
        <ActionButton number = {ActionButton} text = 'clear'/>
        <NumberButton number = {NumberButton} text ="="/>
      </div>
      <div className = 'Nums'>
        <NumberButton number = {NumberButton} text ="7"/>
        <NumberButton number = {NumberButton} text ="8"/>
        <NumberButton number = {NumberButton} text ="9"/>
        <NumberButton number = {NumberButton} text ="x"/>
      </div>
      <div className = 'Nums'>
        <NumberButton number = {NumberButton} text ="4"/>
        <NumberButton number = {NumberButton} text ="5"/>
        <NumberButton number = {NumberButton} text ="6"/>
        <NumberButton number = {NumberButton} text ="-"/>
      </div>
      <div className = 'Nums'>
        <NumberButton number = {NumberButton} text ="1"/>
        <NumberButton number = {NumberButton} text ="2"/>
        <NumberButton number = {NumberButton} text ="3"/>
        <NumberButton number = {NumberButton} text ="+"/>
      </div>
      <div className = 'bottomNums'>
        <ActionButton number = {ActionButton} text = '0'/>
        <NumberButton number = {NumberButton} text ="="/>
      </div>

    </div>

  );
}

export default App;
