import React from 'react';
import './Skills.css'
import js from './Assets/js.png';
import node from './Assets/node.png';
import react from './Assets/react.png';
import redux from './Assets/redux.png';
import sass from './Assets/sass.png';
import git from './Assets/git.png';
import bootstrap from './Assets/bootstrap.png';
import mui from './Assets/mui.png'


function Skills() {
    return (
        <div className="skills">
            <img src={js} alt="js"/>
            <img src={node} alt="node"/>
            <img src={react} alt="react"/>
            <img src={redux} alt="redux"/>
            <img src={sass} alt="sass"/>
            <img src={git} alt="git"/>
            <img src={bootstrap} alt="bootstrap"/>
            <img src={mui} alt="mui"/>
        </div>
    )
}

export default Skills