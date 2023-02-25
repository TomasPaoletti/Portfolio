import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import "./Me.css"


function Me() {
  return (
    <Container className="me">
      <Row>
        <Col>
          <h1>Tomás Paoletti Velado</h1>
          <p>¡Hola! Mi nombre es Tomás y soy desarrollador Frontend. Después de trabajar 10 años en mi propio taller mecánico, decidí dar un giro a mi vida y sumergirme en el mundo IT. Así descubrí el desarrollo Front que me conquistó automáticamente. En este portfolio podrán ver algunos proyectos en donde trabajé y pusieron a prueba mis habilidades. Muchas gracias por estar aquí</p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Skills />
          <Row className="row-display"><Contact /></Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Me