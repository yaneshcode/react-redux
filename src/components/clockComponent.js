import React, { Component } from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.setState((state) => {
      return {date: new Date()};
    });
  }
  componentWillUnmount() {

  }
  render() {
    return (
      <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
