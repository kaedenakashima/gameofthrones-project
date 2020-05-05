import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Logo from './gameofthrones_logo.jpeg'
import Actor1 from './sophia_turner.jpg'
import Actor2 from './maisie_williams.jpg'
import Actor3 from './emilia_clarke.jpg'
import { Button } from '@material-ui/core'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class App extends Component {

  state = {
    persons: [
      { id: '12451695', name: 'Emilia Clarke', actingName: 'Daenerys Targaryen' },
      { id: '12451696', name: 'Maisie Williams', actingName: 'Arya Stark' },
      { id: '12451697', name: 'Sophie Turner', actingName: 'Sansa Stark' },
    ],
    otherState: 'some other value',
    username: 'supermax',
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   //console.log('Was clicked!');
  //   // X this.state.persons[0].name = 'Katie2'
  //   this.setState({
  //     persons: [
  //       { name: newName, actingName: 'Robb Stark' },
  //       { name: 'Maisie Williams', actingName: 'Arya Stark' },
  //       { name: 'Sophie Turner', actingName: 'Sansa Stark' },
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    //const person = Object.assiggn({}, this.state.persons[personsIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  // usernameChangedHandler = (event) => {
  //   this.setState({ username: event.target.value })
  // }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backggrounColor: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
          {/* <Person
            name={this.state.persons[0].name}
            actingName={this.state.persons[0].actingName}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler}
          ><img src={Actor3} alt='Emilia Clarke' style={{ width: '5em' }} /></Person>
          <Person
            name={this.state.persons[1].name}
            actingName={this.state.persons[1].actingName}
          ><img src={Actor2} alt='Maisie Williams' style={{ width: '5em' }} /></Person>
          <Person
            name={this.state.persons[2].name}
            actingName={this.state.persons[2].actingName}
          ><img src={Actor1} alt='Sophie Turner' style={{ width: '5em' }} /></Person> */}
        </div>
      );
    }
    //jsx
    return (
      <div className='App'>
        <img src={Logo} style={{ width: '30em' }} alt='game of thrones' />
        <h1>Main Cast</h1>
        <p>Starring</p>
        <Button
          variant="contained"
          color="primary"
          style={style}
          onClick={this.togglePersonsHandler}
        >See the cast <ArrowForwardIosIcon style={{ marginLeft: '2px', fontSize: '10px' }} />
        </Button>
        <br />
        {persons}
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName='aaaa' />
        <hr />
        <input type='text' onChange={} />
      </div>
    );
    //return React.createElement('div', {className: App }, React.createElement('h1', null, 'Dooes this work now?'))
  }
}

export default App

