import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import SignUp from './components/SignUp';

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
      <Router>
        <div className="App">
        <Route exact path="/" render={props=>(
          <React.Fragment>
              <Form users={this.state.users} />
            </React.Fragment>
          )}/>
          <Route path="/sign-up" component={SignUp} />  
        </div>
      </Router>
    );
  }
}

export default App;
