import React from 'react'
import TextField from '@material-ui/core/TextField';
import './UserInput.css';

const UserInput = (props) => {
    return <div className='UserInput'><TextField
        type='text'
        onChange={props.changed}
        value={props.currentName}
        id="standard-read-only-input"
        margin='normal'
    /></div>;
};

export default UserInput