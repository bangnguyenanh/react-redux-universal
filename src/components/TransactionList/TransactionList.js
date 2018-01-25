import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

@connect(state => ({
  trans: state.spend.spends
}))
export default class TransactionList extends Component {
  static propTypes = {
    trans: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string,
      value: PropTypes.string,
      category: PropTypes.string,
      time: PropTypes.string
    })).isRequired
  };

  render() {
    const { trans } = this.props;

    return (
      <ul className="transaction-list">
        {trans && trans.map(tran => (
          <li className="item" key={tran._id}>
            <div className="main-info">
              <span className="description">{tran.description}</span>
              <span className="value">{tran.amount}</span>
            </div>
            <div className="sub-info">
              <span className="category">{tran.category}</span>
              <span className="time">{tran.time}</span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
