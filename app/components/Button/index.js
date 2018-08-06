/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { ButtonAlfa } from './style';

/* eslint-disable react/prefer-stateless-function */
class Button extends React.Component {
  render() {
    return (
      <ButtonAlfa onClick={() => this.props.onClick()}>
        {this.props.text}
      </ButtonAlfa>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default Button;
