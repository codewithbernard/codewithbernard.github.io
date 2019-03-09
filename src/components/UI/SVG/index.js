import React from 'react';
import Icons from '@assets/icons.svg';
import PropTypes from 'prop-types';

const Icon = ({ name, size }) => (
  <svg width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: 32,
};

export default Icon;
