import React from 'react';

import './ParallaxHeader.css';

function ParallaxHeader(props) {
        return (
                <div 
                        className='parallax-container'
                        style={{
                                'background': `url(${props.imageUrl})`,
                                'backgroundSize': 'cover',
                                'backgroundAttachment': 'fixed',
                                'margin': 'auto'
                        }}
                >
                <h1 className="title">Real Estate Photo</h1>
                </div>
        )
}

export default ParallaxHeader;