import React from 'react';
import { Col } from 'react-bootstrap';
import "./HomeHighlight.css"
const HomeHighlight = (props) => {
    console.log(props.highlight);
    const { title } = props.highlight;
    return (
        <Col>
            <div className="highlight-card my-5 p-5 shadow-lg text-white">
                <h1>{title}</h1>
            </div>
        </Col>
    );
};

export default HomeHighlight;