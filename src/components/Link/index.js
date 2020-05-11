import React from 'react';
import PropTypes from 'prop-types';
import getHistory from '../../utils/clientHistory';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    if (event.defaultPrevented === true) {
      return;
    }

    event.preventDefault();
    getHistory().push(this.props.to);
  };

  render() {
    const { to, children, className } = this.props;
    return (
      <a href={to} className={className} onClick={this.handleClick}>
        {children}
      </a>
    );
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
};

Link.defaultProps = {
  onClick: null,
  children: null,
  className: null,
};

export default Link;
