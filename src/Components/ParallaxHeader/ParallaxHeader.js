import React from 'react';

import './ParallaxHeader.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ParallaxHeader(props) {
        return (
                <div 
                        className='parallax-container'
                        style={{
                                // 'background': `url(${props.imageUrl})`,
                                // 'backgroundSize': 'cover',
                                // 'backgroundAttachment': 'fixed',
                                // 'margin': 'auto'
                        }}
                >
                <img src="https://s3-us-west-1.amazonaws.com/planoprofilewebsite/wp-content/uploads/2018/06/26122526/facebook.png" className="fb-logo" alt="fb-logo"/>
                <img src="https://sguru.org/wp-content/uploads/2018/01/instagram-icon.png" className="ig-logo" alt="ig-logo"/>
                <h1 className="title">Perfect Eye Real Estate Photography</h1>
                <img src="https://bargerdrone.com/wp-content/uploads/drone_icon-1024x950.png" className="header-logo" alt="header-logo"/>
                <h4 className="scroll-text">Scroll Down To Learn About Us</h4>
                <FontAwesomeIcon icon="arrow-down" className="arrow-down-icon"/>
                </div>
        )
}

export default ParallaxHeader;