import React from 'react';
import Black from './black.png';
import White from './white.png';
import Green from './green.png';
import Blue from './blue.png';
import Red from './red.png';

export default ({ selectedImage }) => {
    const src = (() => {
        switch(selectedImage){
            case 'black':
                return Black;
            case 'white':
                return White;
            case 'green':
                return Green;
            case 'blue':
                return Blue;
            case 'red':
                return Red;
            default:
                return <></>;
        }
    })();
    return <img src={src} />
}