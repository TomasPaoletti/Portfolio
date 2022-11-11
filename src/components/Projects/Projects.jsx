import React from 'react';
import "./Projects.css"
import { Card, Container } from 'react-bootstrap';
import CardProjects from './CardProjects';
import riganoHome from './assets/riganoHome.png';
import tuPrestamo from './assets/tuPrestamo.png';
import bukaTemplo from './assets/bukaTemplo.png';


function Projects() {

  return (
    <Container className="container-projects">
      <Card className="text-center">
        <Card.Img src={bukaTemplo} />
        <CardProjects title="Buka Templo"
          text="Buka Templo es la app que presente en el curso de React.js en CoderHouse. En esta app se utilizó HTML, CSS, Bootstrap-react, MUI, firebase y React con algunos Hooks. Se trata de un e-commers donde tiene todas las funcionalidades que se necesita para ponerlo en marcha. Este proyecto obtuvo la calificación de 10."
          git="https://github.com/TomasPaoletti/BukaPaoletti"
          pag="https://bukatemplo.netlify.app/"
        />
      </Card>
      <Card className="text-center">
        <Card.Img src={tuPrestamo} />
        <CardProjects title="Tu préstamo"
          text="Tu préstamo es la app que presente como proyecto final en el curso JavaScript de CoderHouse. Se utilizó HTML, CSS, SASS, Bootstrap y JavaScript vanilla. Simula el cálculo de un crédito personal según el monto y las cuotas que uno desee. Si en algún futuro una persona tiene un crédito en esta página, puede verlo ingresando su nombre y apellido. Este proyecto obtuvo la calificación de 10."
          git="https://github.com/TomasPaoletti/TuPrestamoPaoletti"
          pag="https://tomaspaoletti.github.io/TuPrestamoPaoletti/"
        />
      </Card>
      <Card className="text-center">
        <Card.Img src={riganoHome} />
        <CardProjects title="Estudio Rigano"
          text="Estudio Rigano es mi primer proyecto realizado. En este proyecto utilicé HTML, CSS, SASS y Bootstrap. Fue presentado como trabajo final en el curso desarrollo web en CoderHouse donde obtuvo calificación de 10."
          git="https://github.com/TomasPaoletti/EstudioRigano-Paoletti"
          pag="https://tomaspaoletti.github.io/EstudioRigano-Paoletti/"
        />
      </Card>
    </Container>
  )
}

export default Projects