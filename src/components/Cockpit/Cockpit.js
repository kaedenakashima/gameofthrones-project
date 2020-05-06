import React from 'react';
import './Cockpit.css';
import Logo from './gameofthrones_logo.jpeg'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { DialogTitle } from '@material-ui/core';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = ''


    if (props.showPersons) {
        btnClass = 'Red';
    }

    if (props.persons.length <= 2) {
        assignedClasses.push("red"); //assignedClasses = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push("bold"); //assignedClasses = ['red', 'bold']
    }

    return (
        <div className='Cockpit'>
            <img src={Logo} style={{ width: '30em' }} alt='game of thrones' />
            <h4>{props.title}</h4>
            <p className={assignedClasses.join(' ')}>Starring</p>
            <button
                className="Button"
                onClick={props.clicked}
            >
                See the cast <ArrowForwardIosIcon style={{ marginLeft: '2px', fontSize: '10px' }} />
            </button>
        </div>
    );
};

export default cockpit