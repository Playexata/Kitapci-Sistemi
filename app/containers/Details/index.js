/**
 *
 * Details
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDetails from './selectors';
import reducer from './reducer';
import saga from './saga';
import { TopContainer, ButtonContainer, Result, ResultInside } from './style';
import Button from '../../components/Button';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ['id', 'BookName', 'Autor', 'Publisher'],
      buttonText: 'Kitap Listesi!',
    };
  }
  componentDidMount() {
    axios({
      method: 'get',
      url: `http://5b66e599f793e000145625a0.mockapi.io/Book/${
        this.props.match.params.id
      }`,
    })
      .then(response => this.setState({ data: response.data }))
      .catch(error => {
        console.log(error.message);
      });
  }
  renderTable = data => (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Kitap Adı</th>
          <th>Yazar</th>
          <th>Yayınevi</th>
        </tr>
      </thead>
      <tbody>
        <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.BookName}</td>
          <td>{data.Autor}</td>
          <td>{data.Publisher}</td>
        </tr>
      </tbody>
    </table>
  );

  render() {
    return (
      <div>
        <TopContainer>
          <ButtonContainer>
            <Link to="/">
              <Button text={this.state.buttonText} onClick={this.click} />
            </Link>
          </ButtonContainer>
        </TopContainer>
        <ResultInside>
          <Result>{this.renderTable(this.state.data)}</Result>
        </ResultInside>
      </div>
    );
  }
}

Details.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  details: makeSelectDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'details', reducer });
const withSaga = injectSaga({ key: 'details', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Details);
