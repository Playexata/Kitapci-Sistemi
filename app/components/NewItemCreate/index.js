/**
 *
 * NewItemCreate
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { CreateBar, LittleBox, Bottom, BigBox, TextA } from './style';
import Form from '../Form';
import Button from '../Button';
import HeaderCreate from '../HeaderCreate';

/* eslint-disable react/prefer-stateless-function */
class NewItemCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonText: 'Ekle!',
      buttonTextAlfa: 'Kitap Listesi!',
      BookName: '',
      Autor: '',
      Publisher: '',
    };
  }
  add = () => {
    axios({
      method: 'post',
      url: 'http://5b66e599f793e000145625a0.mockapi.io/Book',
      data: {
        BookName: this.state.BookName,
        Autor: this.state.Autor,
        Publisher: this.state.Publisher,
      },
    });
    alert('Kitap Eklendi!');
  };

  handleChange = event => {
    switch (event.target.name) {
      case 'BookName':
        this.setState({ BookName: event.target.value });
        break;
      case 'Autor':
        this.setState({ Autor: event.target.value });
        break;
      case 'Publisher':
        this.setState({ Publisher: event.target.value });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <HeaderCreate />
        <CreateBar>
          <TextA>Kitap Girişi</TextA>
          <BigBox>
            <LittleBox>
              Kitap İsmi
              <Form
                type="text"
                name="BookName"
                onChange={this.handleChange}
                value={this.state.BookName}
              />
            </LittleBox>
            <LittleBox>
              Yazar
              <Form
                type="text"
                name="Autor"
                onChange={this.handleChange}
                value={this.state.Autor}
              />
            </LittleBox>
            <LittleBox>
              Yayın Evi
              <Form
                type="text"
                name="Publisher"
                onChange={this.handleChange}
                value={this.state.Publisher}
              />
            </LittleBox>
          </BigBox>
          <Button text={this.state.buttonText} onClick={this.add} />
          <Bottom />
        </CreateBar>
      </div>
    );
  }
}

NewItemCreate.propTypes = {};

export default NewItemCreate;
