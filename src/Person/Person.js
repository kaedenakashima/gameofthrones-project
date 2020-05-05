import React from 'react'
import Grid from '@material-ui/core/grid'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
//import './Person.css'
import Radium from 'radium'
import styled from 'styled-components'

const StyleDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
            
    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        // <div className="Person" style={style}>
        <StyleDiv>
            < div onClick={props.click} > {props.name} as {props.actingName
            }</div>
            <div>{props.children}</div>
            <div>
                <TextField type='text' onChange={props.changed} value={props.name} />
            </div>
        </StyleDiv>
    )
};

export default person;
