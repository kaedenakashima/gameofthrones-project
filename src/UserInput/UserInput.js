import React from 'react'
import TextField from '@material-ui/core/TextField';

const userInput = (props) => {
    return <TextField
        type='text'
        onChange={props.changed}
        value={props.currentName}
        id="standard-read-only-input"
        margin='normal'
    />;
};

export default userInput