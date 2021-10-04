import React from 'react';
import { Col } from 'react-bootstrap';

const Review = (props) => {
    const { Name, review } = props.review;
    return (
        <Col>
            <div className="highlight-card my-5 p-5 shadow-lg text-dark">
                <h1 className="text-center">Name: {Name}</h1>
                <h3>{review}</h3>
            </div>
        </Col>
    );
};

export default Review;