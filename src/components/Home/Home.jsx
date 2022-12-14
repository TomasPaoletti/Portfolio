import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Projects from '../Projects/Projects';
import Me from '../Me/Me';
import Contact from '../Contact/Contact'
import "./Home.css"

function Home() {
    return (
        <Container fluid>
            <Row>
                <Col xl={7}><Me /></Col>
                <Col xl={5}><Projects /></Col>
                <Col className="no-display"><Contact /></Col>
            </Row>
        </Container>
    )
}

export default Home