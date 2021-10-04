// this component is for navigation bar
import React from 'react';
import img from '../../img/next guide1.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './HeaderNav.css'
const HeaderNav = () => {
    return (
        <Navbar bg="success" variant="dark" className="w-100">
            <Container>
                <Navbar.Brand > <NavLink to="/home" className="text-white routing-links">
                    <img src={img} alt="" className="nav-img" />
                </NavLink></Navbar.Brand>
                <Nav className="ms-auto ">
                    <NavLink to="/home" className="text-white routing-links me-5">Home</NavLink>
                    <NavLink to="/services" className="text-white routing-links me-5">Services</NavLink>
                    <NavLink to="/reviews" className="text-white routing-links me-5">See Reviews</NavLink>
                    <NavLink to="/about" className="text-white routing-links me-5">About us</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default HeaderNav;