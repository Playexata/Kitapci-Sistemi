/**
 *
 * HeaderCreate
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { TopContainer, ButtonContainer } from './style';
import Button from '../Button';
/* eslint-disable react/prefer-stateless-function */
class HeaderCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonText: 'Kitap Listesi!',
    };
  }
  render() {
    return (
      <TopContainer>
        <ButtonContainer>
          <Link to="/">
            <Button text={this.state.buttonText} onClick={this.click} />
          </Link>
        </ButtonContainer>
      </TopContainer>
    );
  }
}

HeaderCreate.propTypes = {};

export default HeaderCreate;
