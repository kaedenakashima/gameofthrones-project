import React, { useEffect } from 'react';
import './Cockpit.css';
import Logo from './gameofthrones_logo.jpeg'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { DialogTitle } from '@material-ui/core';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
            alert('Saved data to cloud!')
        }, 1000)
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    }, []);

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

export default Cockpit