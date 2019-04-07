import React, { Component } from 'react';

export class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello,
    {this.props.name}. Class</h1>;
  }
}
