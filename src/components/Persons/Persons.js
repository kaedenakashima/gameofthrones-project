import React, { PureComponent } from 'react'
import Person from '../Persons/Person/Person'

export default class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persins.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.lpg('[Persons.js] componentWillReceiveProps', props)
    // }

    // use can manually use this instead of PureComponent
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate')
    //     if (
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    //     // return true;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, preState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('[Persoons.js] rendering...');
        return (this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    actingName={person.actingName}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            )
        })
        );
    }
}
