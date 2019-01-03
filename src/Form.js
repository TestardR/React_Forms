import React, { Component } from 'react';

class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form>
        <input
          name="firstName"
          placeholder="First name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <input
          name="lastName"
          placeholder="Last name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <input
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
        />
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <input
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
        />
      </form>
    );
  }
}

export default Form;
