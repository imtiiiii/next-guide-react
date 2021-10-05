import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from "../../img/headerimg1.svg"
import './HeaderHero.css'
const HeaderHero = () => {
    return (
        <Row className="header-hero">
            {/* 1.Showing the svg image here */}
            <Col xs={12} lg={4} className="hero-img ">
                <img src={img} alt="" />
            </Col>
            {/* 2.Header title here  */}
            <Col xs={12} md={7} className="d-flex flex-column justify-content-center ">
                <h1 >Hello beutiful mind, take warm welcome from <span className="highlight-name"> Next Guide </span> institute </h1>
                <h3 className='fst-italic'>If you are here for any academic or non academic help or help for your further study in abroad or any kind of       educational related help you are at the right door.We will be more than happy to welcome you and solve your problem</h3>
            </Col>

        </Row>
    );
};

export default HeaderHero;