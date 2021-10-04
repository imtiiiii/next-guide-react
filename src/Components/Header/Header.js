// This file contains the header part of the website
// it will be fixed , that means in every page user will see this 

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand > <NavLink to="/home" className="text-white routing-links">  Next-Guide </NavLink></Navbar.Brand>
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

export default Header;