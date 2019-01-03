import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
  state = {
    fields: {}
  };

  handleSubmit = fields => {
    this.setState({ fields });
    console.log('App Component got: ', fields);
  };

  render() {
    return (
      <div className="App">
        <Form onSubmit={fields => this.handleSubmit(fields)} />
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
      </div>
    );
  }
}

export default App;
