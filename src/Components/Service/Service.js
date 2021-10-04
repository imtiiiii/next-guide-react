// this component will show all the service available
import React from 'react';
import { Col, Button } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    console.log(props);
    const { title, to, price, details } = props.service;
    return (
        <Col xs={12} lg={4}>
            {props.children}
            <div className="service-card p-5">
                <div className="service-item">
                    <h1>{title}</h1>
                    <h3 className="fw-bold">For: {to}</h3>
                    <h4>{details}</h4>
                </div>
                <Button variant="warning">Price: ${price}/Month</Button>


            </div>
        </Col>
    );
};

export default Service;