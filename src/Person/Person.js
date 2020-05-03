import React from 'react'

const person = (props) => {
    return (
        <div>
            <p> ̇{props.name} as {props.actingName}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;