import React, { Component } from 'react';
import BsButton from 'reactstrap/lib/Button';

export default class Button extends Component {
  constructor() {
    super();
  }

  render() {
    const { children, color, ...props } = this.props;

    return (
      <BsButton
        color={color || 'secondary'}
        {...props}
      >
        {children}
      </BsButton>
    );
  }
}