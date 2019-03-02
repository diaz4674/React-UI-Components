import React from 'react';
import './Button.css';


const NumberButton = (props) =>  {
    
    return (
        <div className ='buttons'>
          <button className={props.style} >{props.text}</button>
        </div>
    )
}

export default NumberButton;