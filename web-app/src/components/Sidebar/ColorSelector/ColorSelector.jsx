import React from 'react';
import Image from '../../../images';
import './styles.css';

export default ({ color, onChange }) => {
    const checkboxID = `color-selector-${color}`;
    return (
        <>
            <input 
                type="checkbox" 
                id={checkboxID} 
                className="color-selector-input" 
                onChange={() => onChange(color)}
            />
            <label for={checkboxID} className="color-selector-label">
                <Image selectedImage={color} />
            </label>
        </>
    )
}