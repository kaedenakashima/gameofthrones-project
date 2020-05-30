import React, { useEffect, useRef, useContext } from 'react';
import './Cockpit.css';
import Logo from './gameofthrones_logo.jpeg'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { DialogTitle } from '@material-ui/core';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext)

    console.log(authContext.authenticated);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        // setTimeout(() => {
        //     //alert('Saved data to cloud!')
        // }, 1000)
        toggleBtnRef.current.click();
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

    if (props.personsLength <= 2) {
        assignedClasses.push("red"); //assignedClasses = ['red']
    }
    if (props.personsLength <= 1) {
        assignedClasses.push("bold"); //assignedClasses = ['red', 'bold']
    }

    return (
        <div className='Cockpit'>
            <img src={Logo} style={{ width: '30em' }} alt='game of thrones' />
            <h4>{props.title}</h4>
            <p className={assignedClasses.join(' ')}>Starring...✨🌟</p>
            <button
                ref={toggleBtnRef}
                className="Button"
                onClick={props.clicked}
            >
                Assign the cast <ArrowForwardIosIcon style={{ marginLeft: '2px', fontSize: '10px' }} />
            </button>
            <button onClick={authContext.login}>Login</button>

        </div>
    );
};

export default React.memo(Cockpit);