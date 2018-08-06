/**
 *
 * Form
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { ImportForm } from './style';

/* eslint-disable react/prefer-stateless-function */
class Form extends React.Component {
  render() {
    return (
      <ImportForm
        name={this.props.name}
        type={this.props.type}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

Form.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Form;
