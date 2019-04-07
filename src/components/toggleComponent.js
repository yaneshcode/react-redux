import React, { Component } from 'react';

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true, title: "something"};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  handleChange(event) {
    this.setState({title: event.target.value})
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <input type="text" name="title" value={this.state.title}
          onChange={this.handleChange}/>
        <p>{this.state.title}</p>
      </div>
    );
  }
}
