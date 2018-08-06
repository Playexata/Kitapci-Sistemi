/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { TopContainer, ButtonContainer } from './style';
import Button from '../Button';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonText: 'Ekle!',
    };
  }

  render() {
    return (
      <TopContainer>
        <ButtonContainer>
          <Link to="/create">
            <Button text={this.state.buttonText} onClick={this.click} />
          </Link>
        </ButtonContainer>
      </TopContainer>
    );
  }
}

Header.propTypes = {};

export default Header;
