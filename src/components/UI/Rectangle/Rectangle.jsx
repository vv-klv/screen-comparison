import React from 'react';
import cl from './Rectangle.module.scss'

const Rectangle = ({ width, height, isInFront }) => {
    return (
        <div
            className={`${cl.rectangle} ${isInFront ? cl.rectangle_inFront : ''}`}
            style={{ height: `${height}px`, width: `${width}px` }}
        />
    );
};

export default Rectangle;
