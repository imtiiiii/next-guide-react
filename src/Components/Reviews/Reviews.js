// This component is to show user REVIEWS of  the institute

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("./ReviewDb.JSON")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className="my-4">
            <h1 className="text-center">Review Section. Love of people for us!!!</h1>
            <Container>
                <Row xs={1} lg={1} gap={3}>
                    {/* 3. loop through all the highlights component and map through to keep creating single highlight component */}
                    {
                        reviews.map(review => <Review review={review} key={review.id} ></Review>)
                    }
                </Row>
            </Container>
        </div >
    );
};

export default Reviews;