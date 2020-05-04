import React from 'react'
import Grid from '@material-ui/core/grid'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <div onClick={props.click}>{props.name} as {props.actingName}</div>
            <div>{props.children}</div>
            <div>
                <TextField type='text' onChange={props.changed} value={props.name} />
            </div>

        </div>
    )
};

export default person;
