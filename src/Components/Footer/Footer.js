import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './Footer.css'
import img from "../../img/Footer1.jpg"
const Footer = () => {
    return (
        <Row className="header-hero bg-secondary">
            {/* 1.Showing the svg image here */}
            <Col xs={12} lg={4} className=" ">
                <div className="d-flex justify-content-center ">
                    <img src={img} alt="" className="w-100" />
                </div>
            </Col>
            {/* 2.Header title here  */}
            <Col xs={12} md={6} className="d-flex flex-column justify-content-center ">
                <h1 >Thanks for visiting<span className="highlight-name"> Next Guide </span> </h1>
                <p>Contact us: +8801712132411</p>
                <p>Do you have any query?  Any kind suggetion and feedback for us will be very appreciable</p>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Ahmed Ali" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label >QUERY / SUGGETION/FEEDBACK</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Col>

        </Row>
    );
};

export default Footer;