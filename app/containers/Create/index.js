/**
 *
 * Create
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCreate from './selectors';
import reducer from './reducer';
import saga from './saga';
import NewItemCreate from '../../components/NewItemCreate';
/* eslint-disable react/prefer-stateless-function */
export class Create extends React.Component {
  render() {
    return <NewItemCreate />;
  }
}

Create.propTypes = {};

const mapStateToProps = createStructuredSelector({
  create: makeSelectCreate(),
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

const withReducer = injectReducer({ key: 'create', reducer });
const withSaga = injectSaga({ key: 'create', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Create);
