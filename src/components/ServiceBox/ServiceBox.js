import React from 'react';
import PropTypes from 'prop-types';

const ServiceBox = props => {
  const {
    icon, title, description
  } = props;

  return (
    <div className="mt-5 mx-auto">
      <i className={`fa fa-4x ${icon} text-primary mb-3 sr-icons`} />
      <h3 className="mb-3">{title}</h3>
      <p className="text-muted mb-0">{description}</p>
    </div>
  );
};

ServiceBox.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ServiceBox;
