// This file contains the header part of the website
// it will be fixed , that means in every page user will see this 
import img from "../../img/headerimg1.svg"
import React from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HeaderNav from '../HeaderNav/HeaderNav';
import "./Header.css"
import HeaderHero from "../HeaderHero/HeaderHero";
const Header = () => {
    return (
        <div>
            {/* 1.Calling nav component here  */}
            <HeaderNav></HeaderNav>
            <div className="header-hero-compo">
                {/* 2. calling header hero component here  */}
                <HeaderHero></HeaderHero>
            </div>
        </div>

    );
};

export default Header;