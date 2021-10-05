// this component is for navigation bar
import React from 'react';
// import img from '../../img/next guide1.png'
// import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './HeaderNav.css'
const HeaderNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container">
                <NavLink className="navbar-brand text-white" to="/home">Next Guide</NavLink>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-4 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active routing-links text-white mx-3" aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  text-white mx-3 routing-links" aria-current="page" to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className=" routing-links nav-link  text-white mx-3" aria-current="page" to="/reviews">Reviews</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="routing-links nav-link  text-white mx-3" aria-current="page" to="/about">About us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default HeaderNav;