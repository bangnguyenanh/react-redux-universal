import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import categoryDict from 'utils/categoryDict';
import { loadList } from 'redux/modules/spend';

@connect(state => ({
  items: state.spend.spends.items,
  currentPage: state.spend.spends.currentPage,
  totalPages: state.spend.spends.totalPages
}), { loadList })
export default class TransactionList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string,
      value: PropTypes.string,
      category: PropTypes.string,
      time: PropTypes.string
    })).isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    loadList: PropTypes.func.isRequired
  };

  handleLoad = page => () => {
    this.props.loadList({ pageIndex: page, pageSize: 5 });
  }

  render() {
    const styles = require('./TransactionList.scss');
    const { items, currentPage, totalPages } = this.props;

    let pages = [];
    if (totalPages >= 3) {
      if (currentPage === 0) {
        pages = [currentPage, currentPage + 1, currentPage + 2];
      } else if (currentPage === totalPages - 1) {
        pages = [currentPage - 2, currentPage - 1, currentPage];
      } else {
        pages = [currentPage - 1, currentPage, currentPage + 1];
      }
    }

    return (
      <div className="list-container">
        <ul className="transaction-list">
          {items && items.map(tran => (
            <li className="item" key={tran._id}>
              <div className="main-info">
                <span className="description">{tran.description}</span>
                <span className="value">{tran.amount}</span>
              </div>
              <div className="sub-info">
                <span className="category">{categoryDict.find(cat => cat.key === tran.category).label}</span>
                <span className="time">{moment(tran.createdDate).format('LLL')}</span>
              </div>
            </li>
          ))}
        </ul>

        {totalPages < 3 && (
          <ul className={`${styles.pagination} pagination`}>
            <li className={currentPage === 0 ? 'active' : ''}>
              <button onClick={this.handleLoad(0)}>1</button>
            </li>
            <li className={currentPage === 1 ? 'active' : ''}>
              <button onClick={this.handleLoad(1)}>2</button>
            </li>
          </ul>
        )}

        {totalPages >= 3 && (
          <ul className={`${styles.pagination} pagination`}>
            {pages.map(page => (
              <li key={page} className={currentPage === page ? 'active' : ''}>
                <button onClick={this.handleLoad(page)}>{page + 1}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
