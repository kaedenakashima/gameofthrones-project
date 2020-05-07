import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Actor1 from './sophia_turner.jpg'
import Actor2 from './maisie_williams.jpg'
import Actor3 from './emilia_clarke.jpg'
import UserInput from '../components/UserInput/UserInput'
import UserOutput from '../components/UserOutput/UserOutput'
import Validation from '../components/Validation/Validation'
import Char from '../Char/Char'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import { ThemeConsumer } from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { id: '12451695', name: 'Emilia Clarke', actingName: 'Daenerys Targaryen' },
      { id: '12451696', name: 'Maisie Williams', actingName: 'Arya Stark' },
      { id: '12451697', name: 'Sophie Turner', actingName: 'Sansa Stark' },
    ],
    otherState: 'some other value',
    username: 'supermax',
    showPersons: false,
    showCockpit: true,
    userInput: ''
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDrivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');

  }

  inputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value });
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  }

  render() {
    console.log('[App.js] render')
    var persons = null;

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)}
      />
    });

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      )
      {/* {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                actingName={person.actingName}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            </ErrorBoundary>
          })} */}
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
    }

    //jsx
    return (
      <div className="App">
        <button onClick={() => {
          this.setState({ showCockpit: false })
        }}>Remove Cockpit</button>
        {this.state.showCockpit ? (<Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons} persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />)
          : null}
        {persons}
        <UserInput
          changed={this.nameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName='aaaa' />
        <hr />
        <input
          type='text'
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div >
    );
    //return React.createElement('div', {className: App }, React.createElement('h1', null, 'Dooes this work now?'))

  }
}

export default App;

