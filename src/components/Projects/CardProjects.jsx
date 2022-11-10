import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';



export default function CardProjects({ title, text, git, pag }) {

    return (
        <Card.ImgOverlay>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Row>
                <Col>
                    <Button target="_blank" href={git} bsPrefix="button">Codigo</Button>
                    <Button target="_blank" href={pag} bsPrefix="button">Pagina</Button>
                </Col>
            </Row>
        </Card.ImgOverlay>
    )
}