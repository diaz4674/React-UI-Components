import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <div className ='CardContent'> 
            <CardBanner/>
            <CardContent/>
        </div>
        )
    
}

export default CardContainer;