/**
 *
 * BookTable
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import props from 'prop-types';
import axios from 'axios';
import Button from '../Button';
import { BookTableMain, Input, SerchContainer, Controller, ControllerLeft, ControllerPage, ControllerRight  } from './style';

// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */

class BookTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      tableHeader: ['id', 'BookName', 'Autor', 'Publisher'],
      searchText: '',
      dataAdedi: 15,
      sayfaNumarası: 0,
      buttonText: 'Ayrıntılar',
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://5b66e599f793e000145625a0.mockapi.io/Book',
    }).then(response => this.setState({ data: response.data }));
  }
  ara() {
    axios({
      method: 'get',
      url: `http://5b66e599f793e000145625a0.mockapi.io/Book/?search=${
        this.state.searchText
      }`,
    })
      .then(response => this.setState({ data: response.data }))
      .catch(error => {
        console.log(error.message);
      });
  }

  sortByKey = key =>
    this.state.data.sort((a, b) => {
      const x = a[key];
      const y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });

  shortBy = key => {
    const data = this.sortByKey(key);
    this.setState({ data });
  };

  onChangeSearchText = e => {
    this.setState({ searchText: e.target.value });
    console.log(this.state.searchText);
  };

  tablePageChanger = number => {
    this.setState({ sayfaNumarası: number });
  };

  renderTable = data => (
    <table>
      <thead>
        <tr>
          <th onClick={() => this.shortBy('id')}>#</th>
          <th onClick={() => this.shortBy('BookName')}>Kitap Adı</th>
          <th onClick={() => this.shortBy('Autor')}>Yazar</th>
          <th onClick={() => this.shortBy('Publisher')}>Yayınevi</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.BookName}</td>
            <td>{row.Autor}</td>
            <td>{row.Publisher}</td>
            <td>
              <Link to={`details/${row.id}`}>
                <Button text={this.state.buttonText} onClick={this.click} />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  renderOptions = () => {
    let x = '';
    for (
      let i = 0;
      i < Math.floor(this.state.data.length / this.state.dataAdedi);
      i++
    ) {
      x = `${x}1 `;
    }
    return x
      .split(' ')
      .map((item, index) => <option value={index + 1}>{index + 1}</option>);
  };

  render() {
    return (
      <div>
        <BookTableMain>
          <SerchContainer>
            <Input
              type="text"
              placeHolder="ARA"
              value={this.state.searchText}
              onChange={this.onChangeSearchText}
            />
            <Button text="Arama Yap" onClick={this.ara.bind(this)} />
          </SerchContainer>
          {this.renderTable(
            this.state.data.slice(
              this.state.sayfaNumarası * this.state.dataAdedi,
              this.state.dataAdedi * this.state.sayfaNumarası +
                this.state.dataAdedi,
            ),
          )}
                    <Controller>
              <ControllerLeft
                onClick={() =>
                  this.state.sayfaNumarası < 1
                    ? null
                  : this.setState({ sayfaNumarası: this.state.sayfaNumarası - 1 })
                }
              >
              Geri
              </ControllerLeft>
              <ControllerPage>
                <select
                  value={this.state.sayfaNumarası + 1}
                  onChange={event =>
                    this.setState({ sayfaNumarası: event.target.value - 1 })
                  }
                >
                  {this.renderOptions()}
                </select>
              </ControllerPage>
            <ControllerRight
                onClick={() =>
                  this.state.dataAdedi * (this.state.sayfaNumarası + 1) >=
                this.state.data.length
                    ? null
                  : this.setState({ sayfaNumarası: this.state.sayfaNumarası + 1 })
                }
              >
              İleri
              </ControllerRight>
          </Controller>
        </BookTableMain>
      </div>
    );
  }
}

BookTable.propTypes = {};

export default BookTable;
