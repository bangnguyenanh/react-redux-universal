import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ServiceBox extends Component {
    static propTypes = {
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }

    render() {
        const styles = require('./ServiceBox.scss');
        return (
            <div className={`mt-5 mx-auto`}>
                <i className={`fa fa-4x ${this.props.icon} text-primary mb-3 sr-icons`} />
                <h3 className="mb-3">{this.props.title}</h3>
                <p className="text-muted mb-0">{this.props.description}</p>
            </div>
        );
    }
}
