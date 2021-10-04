// this component will be our homepage
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HomeHighlight from '../HomeHighlight/HomeHighlight';

const Home = () => {
    // 1.set state to store and update data 
    const [highlights, setHighlights] = useState([]);
    // 2. load the data from home-highlights file
    useEffect(() => {
        fetch("./home-highlights.JSON")
            .then(res => res.json())
            .then(data => setHighlights(data));
    }, [])
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
                </Container>
            </div>
        </div>
    );
};

export default Home;