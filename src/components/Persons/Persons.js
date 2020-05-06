import React, { Component } from 'react'
import Person from '../Persons/Person/Person'

export default class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persins.js] getDerivedStateFromProps');
    //     return state;
    // }

    componentWillReceiveProps(props) {
        console.lpg('[Persons.js] componentWillReceiveProps', props)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, preState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot)
    }

    render() {
        console.log('[Persoons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            )
        });
    }
}
