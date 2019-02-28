import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className = "HeaderTitle"> 
            <h5>Lambda School</h5>
            <p className = "lambdaTimestamp"> @LambdaSchool - 26 Jan</p>
        </div>
    );
}

export default HeaderTitle;