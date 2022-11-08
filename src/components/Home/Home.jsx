import React from 'react';
import "./Home.css"
import { Col, Container, Row } from 'react-bootstrap';
import Projects from '../Projects/Projects';
import Me from '../Me/Me';


function Home() {
    return (
        <Container fluid>
            <Row>
                <Col xl={7} className="column"><Me /></Col>
                <Col xl={5} className="column"><Projects /></Col>
            </Row>
        </Container>
    )
}

export default Home