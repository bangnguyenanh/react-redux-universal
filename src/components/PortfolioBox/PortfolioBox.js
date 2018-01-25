import React from 'react';
import PropTypes from 'prop-types';

const PortfolioBox = props => {
  const styles = require('./PortfolioBox.scss');

  const {
    link, thumbnailUrl, projectCategory, projectName
  } = props;

  return (
    <a className={styles.portfolioBox} href={link}>
      <img className="img-fluid" src={thumbnailUrl} alt="" />
      <div className={styles.portfolioBoxCaption}>
        <div className={styles.portfolioBoxCaptionContent}>
          <div className={`${styles.projectCategory} text-faded`}>{projectCategory}</div>
          <div className={styles.projectName}>{projectName}</div>
        </div>
      </div>
    </a>
  );
};

PortfolioBox.propTypes = {
  link: PropTypes.string.isRequired,
  projectCategory: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired
};

export default PortfolioBox;
