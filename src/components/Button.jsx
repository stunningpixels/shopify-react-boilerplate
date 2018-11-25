import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true,
    });
  }

  render() {
    const {
      text,
    } = this.props;

    const {
      clicked,
    } = this.state;

    return (
      <button type="button" onClick={this.handleClick}>{ clicked ? `{{ shop.domain }}` : text }</button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
