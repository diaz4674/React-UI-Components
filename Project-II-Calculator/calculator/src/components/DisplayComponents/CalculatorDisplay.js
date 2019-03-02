import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
        <div className ='display'>
            <h2 className ={props.display}> {props.text}</h2>
        </div>
    )
}

export default CalculatorDisplay;