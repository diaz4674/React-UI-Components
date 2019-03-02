import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <div className = 'actionButtons'>
            <button className={props.style}>{props.text}</button>
        </div>
    )
}


export default ActionButton;