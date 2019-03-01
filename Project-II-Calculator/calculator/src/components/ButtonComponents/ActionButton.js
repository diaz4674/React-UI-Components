import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <div className = 'actionButtons'>
            <div className={props.buttonStyle}>{props.text}</div>
        </div>
    )
}


export default ActionButton;