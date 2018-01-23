import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SpendList = props => {
  const styles = require('./SpendList.scss');
  const { spendList } = props;
  return (
    <div className={styles.spendList}>
      {spendList && spendList.map(item => (
        <div key={item._id}>
          <h2>{item.amount}</h2>
          <h3>{item.category}</h3>
          <span>{item.description}</span>
        </div>
      ))}
    </div>
  );
};

SpendList.propTypes = {
  spendList: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
  })).isRequired
};

export default connect(state => ({
  spendList: state.spend.spends
}))(SpendList);
