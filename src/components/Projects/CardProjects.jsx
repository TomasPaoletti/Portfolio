import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';



export default function CardProjects({ title, text, git, pag }) {

    return (
        <Card.ImgOverlay>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Row>
                <Col className="button-column">
                    <Button target="_blank" href={git} bsPrefix="button">código</Button>
                    <Button target="_blank" href={pag} bsPrefix="button">Sitio</Button>
                </Col>
            </Row>
        </Card.ImgOverlay>
    )
}