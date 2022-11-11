import React from 'react'
import "./Contact.css"
import { FaGithub, FaLinkedin, FaEnvelope, FaFile } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/reducer'
import download from "../../assets/CV-Tomas-Paoletti.pdf";
import FormContact from '../Form/FormContact';


function Contact() {

  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <div className="contact">
        <h3>Contactame</h3>
        <a href="https://github.com/TomasPaoletti" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/tomas-paoletti-velado/" target="_blank"><FaLinkedin /></a>
        <a href={download} download={true}><FaFile /></a>
        <a onClick={() => dispatch(setModal())}>
          {modal ? <FaEnvelope /> : <FaEnvelope />}
        </a>
        <FormContact />
      </div>
    </IconContext.Provider>
  );
}

export default Contact;