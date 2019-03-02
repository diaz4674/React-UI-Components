import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className = 'ReactContainer'>
            <h5>Get started with React</h5>
            <p className = 'ReactContent'>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
           <a href ="https://reactjs.org/">reactjs.org</a>
        </div>
    )
}

export default CardContent;