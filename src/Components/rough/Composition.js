import React, { Component } from 'react';

export class Composition extends Component {
  render() {
    return <div>
        {this.props.children}
    </div>;
  }
}

export default Composition;
