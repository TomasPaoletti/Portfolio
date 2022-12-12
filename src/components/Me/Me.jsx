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
          <p>Soy desarrollador Frontend. Me gusta crear sólidos y funcionales proyectos que le den al usuario una experiencia excelente. Amante del clean code, de las buenas prácticas y de React.</p>
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