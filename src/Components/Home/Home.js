// this component will be our homepage
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useReviews from '../../Hooks/useReview';
import HomeHighlight from '../HomeHighlight/HomeHighlight';
import Review from '../Review/Review';

const Home = () => {
    // 1.set state to store and update data 
    const [highlights, setHighlights] = useState([]);
    // 2. load the data from home-highlights file
    useEffect(() => {
        fetch("./home-highlights.JSON")
            .then(res => res.json())
            .then(data => setHighlights(data));
    }, [])
    let [reviews] = useReviews();
    reviews = reviews.slice(0, 3);
    return (
        <div className="my-5">
            <h1 className="text-center uppercase">Some highlights of our instituton that can be useful to you !!!</h1>
            <div>
                <Container>
                    <Row xs={1} lg={2} gap={3}>
                        {/* 3. loop through all the highlights component and map through to keep creating single highlight component */}
                        {
                            highlights.map(highlight => <HomeHighlight highlight={highlight} key={highlight.id}></HomeHighlight>)
                        }
                    </Row>
                    <Button variant="success" >
                        <NavLink to="/services" className="text-white routing-links">
                            See Details
                        </NavLink>
                    </Button>
                    <h1 className="text-center mt-5">TESTIMONIAL</h1>
                    <Row xs={1} lg={1} gap={3}>
                        {
                            reviews.map(review => <Review review={review} key={review.id}></Review>)
                        }
                    </Row>
                    <Button variant="success" >
                        <NavLink to="/reviews" className="text-white routing-links">
                            See more reviews
                        </NavLink>
                    </Button>

                </Container>
            </div>
        </div>
    );
};

export default Home;