import React from 'react';

export const Loading = () => {
    return (
        <div className="contenedor__tetrominos">
            <div className="contenedor__tetrominos-figure">
                <div className="tetrominos">
                    <div className="tetromino box1"></div>
                    <div className="tetromino box2"></div>
                    <div className="tetromino box3"></div>
                    <div className="tetromino box4"></div>
                </div>
            </div>
            <div className="contenedor__tetrominos-text">
                <span>Wait please...</span>
            </div>
        </div>
    );
};
