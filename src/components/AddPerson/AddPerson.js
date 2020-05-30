import React from 'react';

import './AddPerson.css';

const addPerson = (props) => (
    <div className="AddPerson">
        <h4>2. Applicants</h4>
        <button onClick={props.personAdded}>Add Person</button>
    </div>
);

export default addPerson;