import { Component } from 'react';
import './App.css';
import Form from './components/Form'

class App extends Component {

  state = {
    users: [
      {
        id: 1,
        username: 'Bob',
        password: '123'
      },
      {
        id: 2,
        username: 'Ann',
        password: '124'
      },
      {
        id: 3,
        username: 'Chandra',
        password: '125'
      }
    ]
  }

render() {

    //pass props to Form.js, props here are array of Objects
    return (
      <div className="App">
        <Form users={this.state.users} />
      </div>
    );
  }
}

export default App;
