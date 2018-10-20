import React from 'react';

import './ParallaxImage.css';

function ParallaxImage(props) {
        return (
                <div 
                        className='parallax-image-container'
                        style={{
                                'background': `url(${props.imageUrl})`,
                                'backgroundSize': 'cover',
                                'backgroundAttachment': 'fixed',
                                'margin': 'auto'
                        }}
                >
                </div>
        )
}

export default ParallaxImage;