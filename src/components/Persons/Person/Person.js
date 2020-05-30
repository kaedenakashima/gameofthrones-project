import React, { Component } from 'react'
import Grid from '@material-ui/core/grid'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import './Person.css'
import Radium from 'radium'
import { render } from '@testing-library/react';
import Aux from '../../../hoc/Aux'
import WithClass from '../../../hoc/WithClass'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context';

export default class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Perosn.js] rendering..');
        return (
            <div className='Person'>
                <Aux>
                    {this.context.authenticated ? (
                        <p>Character decided!</p>
                    ) : (
                            <p>Please login</p>
                        )
                    }
                    <p key="i1" onClick={this.props.click}> {this.props.name} as {this.props.actingName}</p>
                    <p key='i2'>{this.props.children}</p>
                    <div>
                        <TextField
                            key='i3'
                            //ref={(inputEl) => { this.inputElement = inputEl }}
                            ref={this.inputElementRef}
                            type='text'
                            onChange={this.props.changed}
                            value={this.props.name}
                        />
                    </div>
                </Aux>
            </div>
        );
    }

};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    actingName: PropTypes.string,
    changed: PropTypes.func
};
