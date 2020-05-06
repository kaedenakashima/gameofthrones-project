import React, { Component } from 'react'
import Grid from '@material-ui/core/grid'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import './Person.css'
import Radium from 'radium'
import styled from 'styled-components'
import { render } from '@testing-library/react';

export default class Person extends Component {
    render() {
        console.log('[Perosn.js] rendering..');
        return (
            <div className='Person'>
                <div onClick={this.props.click}> {this.props.name} as {this.props.actingName}</div>
                <div>{this.props.children}</div>
                <div>
                    <TextField type='text' onChange={this.props.changed} value={this.props.name} />
                </div>
            </div>
        )
    }

};
