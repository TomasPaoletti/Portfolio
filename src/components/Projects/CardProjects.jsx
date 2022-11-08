import React from 'react';
import { Button, Card } from 'react-bootstrap';



export default function CardProjects({ title, text, git, pag }) {

    return (
        <Card.ImgOverlay>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Button target="_blank" href={git} bsPrefix="button">Codigo</Button>
            <Button target="_blank" href={pag} bsPrefix="button">Pagina</Button>
        </Card.ImgOverlay>
    )
}