import React, { Component } from 'react';

export class CompositionAgain extends Component {
  render() {
    return <div>
        {this.props.children}
    </div>;
  }
}

export default CompositionAgain;
