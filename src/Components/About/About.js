// this component is to show user ABOUT US section
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './About.css'
import img from '../../img/aboutus1.jpg'

const About = () => {
    return (
        <Row className=" about-us">
            <Col xs={11} lg={5} className="ms-3">
                <div className="py-5">
                    <img src={img} alt="" className="w-100 rounded-3" />
                </div>
            </Col>
            <Col xs={11} lg={6} className=" about-us-text">
                <div className=" fst-italic  font-monospace d-flex justify-content-center align-items-center py-5" >
                    <h3>
                        Next Guide is a versatile institute.We started this journey in 2000 keeping the target to help our childrean who are the future of our country to be more creative more active and more successfull in their life. This institute matters the whole life to all those who are involded to built this institution from the start. It was very hard for us when we first started this project but now we are very happy that we are getting so much response from people around the whole country. Our teachers are doing a great job. We will be very pleased if you join with us. Thank you.
                    </h3>
                </div>
            </Col>
        </Row>
    );
};

export default About;