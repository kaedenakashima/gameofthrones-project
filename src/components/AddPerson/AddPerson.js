import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    nameChangedHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    ageChangedHandler = (event) => {
        this.setState({ age: event.target.value });
    }

    render() {
        return (
            <div className="AddPerson">
                <h4>2. Applicants</h4>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={this.nameChangedHandler}
                    value={this.state.name}
                />
                <input
                    type="number"
                    placeholder="Age"
                    onChange={this.ageChangedHandler}
                    value={this.state.age}
                />
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        );
    }

}

export default AddPerson;