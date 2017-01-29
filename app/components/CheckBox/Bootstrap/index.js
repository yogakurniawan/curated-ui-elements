import React, { PropTypes } from 'react';

import Label from './Label';

const CheckBox = (props) => {
  const { label, color, ...rest } = props;
  return (<Label color={color}>
    {label}
    <input type="checkbox" {...rest} />
    <div className="control-indicator"></div>
  </Label>);
};

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default CheckBox;
