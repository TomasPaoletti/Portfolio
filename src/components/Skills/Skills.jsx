import React from 'react';
import js from './Assets/js.png';
import typescript from './Assets/typescript.png'
import react from './Assets/react.png';
import redux from './Assets/redux.png';
import sass from './Assets/sass.png';
import SQL from './Assets/SQL.png';
import bootstrap from './Assets/bootstrap.png';
import firebase from './Assets/firebase.png'
import './Skills.css'


function Skills() {
    return (
        <div className="skills">
            <img src={sass} alt="sass" />
            <img src={bootstrap} alt="bootstrap" />
            <img src={js} alt="js" />
            <img src={typescript} alt="typescript" />
            <img src={react} alt="react" />
            <img src={redux} alt="redux" />
            <img src={SQL} alt="SQL" />
            <img src={firebase} alt="firebase" />
        </div>
    )
}

export default Skills