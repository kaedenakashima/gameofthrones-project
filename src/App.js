import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import Logo from './gameofthrones_logo.jpeg'
import Actor1 from './sophia_turner.jpg'

const App = props => {
  const [personsState, setPeronsState] = useState({
    persons: [
      { name: 'Emilia Clarke', actingName: 'Daenerys Targaryen' },
      { name: 'Maisie Williams', actingName: 'Arya Stark' },
      { name: 'Sophie Turner', actingName: 'Sansa Stark' },
    ],
    otherState: 'some other value'
  });

  const [otherState, setOtherState] = useState('some other value');
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log('Was clicked!');
    // X this.state.persons[0].name = 'Katie2'
    this.setState({
      persons: [
        { name: 'Richard Madden', actingName: 'Robb Stark' },
        { name: 'Maisie Williams', actingName: 'Arya Stark' },
        { name: 'Sophie Turner', actingName: 'Sansa Stark' },
      ]
    });
  };

  console.log(personsState, otherState);

  //jsx
  return (
    <div className='App'>
      <img src={Logo} style={{ width: '30em' }} />
      <h1>Main Cast</h1>
      <p>Starring</p>
      <button onClick={switchNameHandler}>See another cast</button>
      <Person name={personsState.persons[0].name} actingName={personsState.persons[0].actingName} />
      <Person name={personsState.persons[1].name} actingName={personsState.persons[1].actingName} />
      <Person name={personsState.persons[2].name} actingName={personsState.persons[2].actingName}><img src={Actor1} /></Person>
    </div>
  );
  //return React.createElement('div', {className: App }, React.createElement('h1', null, 'Dooes this work now?'))
}

export default App;
