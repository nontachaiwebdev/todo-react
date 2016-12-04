import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Button = ({ active, children, onClick }) => (
  <button
    className={classNames('pt-button', 'pt-minimal', active && 'pt-active')}
    onClick={() => { onClick(); }}
    role="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
