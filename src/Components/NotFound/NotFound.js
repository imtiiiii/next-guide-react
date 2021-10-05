import React from 'react';
import './NotFound.css'
import img from '../../img/notfound1.png'
const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="d-flex justify-content-center">
                <img src={img} alt="" />
            </div>
            <div className="not-found-text">
                <h1 className="text-center">Sorry you came to the wrong place! Page not found</h1>
            </div>
        </div>
    );
};

export default NotFound