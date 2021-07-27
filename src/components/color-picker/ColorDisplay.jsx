import React from 'react';
import PropTypes from 'prop-types';

const ColorDisplay = ({ backgroundColor }) => {
  return (
    <div
      style = {{
        backgroundColor,
        width: '100vw',
        height: '100vh',
      }}
    ></div>
  );
};

ColorDisplay.PropTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

export default ColorDisplay;
