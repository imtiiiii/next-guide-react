import React from 'react';
import { Col } from 'react-bootstrap';
import './Review.css'

const Review = (props) => {
    let star =
        <div className="review-star d-flex justify-content-center align-items-center">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
    const { Name, review } = props.review;
    return (
        <Col>
            <div className="highlight-card my-5 p-5  text-dark">
                <h1 className="text-center">Name: {Name}</h1>
                <h3>{review}</h3>
                {star}
            </div>
        </Col>
    );
};

export default Review;