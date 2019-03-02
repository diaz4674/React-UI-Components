import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbail from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <div className ="HeaderContainer"> 
            <div className= 'LambdaThumbnail'>
                        <ImageThumbail />
            </div>
                <div className = "HeaderContent">
                        <HeaderTitle />
                        <HeaderContent />
                </div>
        </div>
    );
}

export default HeaderContainer;