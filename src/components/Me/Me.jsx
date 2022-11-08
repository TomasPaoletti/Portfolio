import React from 'react'
import "./Me.css"
import { Col, Container, Row } from 'react-bootstrap'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'


function Me() {
  return (
    <Container className="me">
      <Row className="justify-content-center">
        <Col>
          <h1>Tomás Paoletti Velado</h1>
          <p>Soy desarrollador Frontend. Me gusta crear agradables y funcionales proyectos que le den al usuario una experiencia excelente. Amante del clean code, de las buenas practicas y de React.</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <Skills />
        </Col>
      </Row>
      <Row className="justify-content-start">
        <Col md={6}>
          <Contact />
        </Col>
      </Row>
    </Container>
  )
}

export default Me