import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Logo from './gameofthrones_logo.jpeg'
import Actor1 from './sophia_turner.jpg'

class App extends Component {
  state = {
    persons: [
      { name: 'Emilia Clarke', actingName: 'Daenerys Targaryen' },
      { name: 'Maisie Williams', actingName: 'Arya Stark' },
      { name: 'Sophie Turner', actingName: 'Sansa Stark' },
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    // X this.state.persons[0].name = 'Katie2'
    this.setState({
      persons: [
        { name: newName, actingName: 'Robb Stark' },
        { name: 'Maisie Williams', actingName: 'Arya Stark' },
        { name: 'Sophie Turner', actingName: 'Sansa Stark' },
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, actingName: 'Robb Stark' },
        { name: 'Maisie Williams', actingName: 'Arya Stark' },
        { name: 'Sophie Turner', actingName: 'Sansa Stark' },
      ]
    })
  }

  render() {
    //jsx
    return (
      <div className='App'>
        <img src={Logo} style={{ width: '30em' }} alt='game of thrones' />
        <h1>Main Cast</h1>
        <p>Starring</p>
        <button onClick={() => this.switchNameHandler('Richard Madden')}>See another cast</button>
        <Person
          name={this.state.persons[0].name}
          actingName={this.state.persons[0].actingName}
          // click={this.switchNameHandler.bind(this, 'Richard Madden!')}
          // changed={this.nameChangeHandler}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}
        >aaaaa</Person>
        <Person
          name={this.state.persons[1].name}
          actingName={this.state.persons[1].actingName}
        />
        <Person
          name={this.state.persons[2].name}
          actingName={this.state.persons[2].actingName}
        ><img src={Actor1} alt='Sophie Turner' /></Person>
      </div>
    );
    //return React.createElement('div', {className: App }, React.createElement('h1', null, 'Dooes this work now?'))
  }
}

export default App
