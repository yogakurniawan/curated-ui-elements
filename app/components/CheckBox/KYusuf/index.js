import React, { PropTypes } from 'react';

import Label from './Label';

const CheckBox = (props) => {
  const { label, ...rest } = props;
  return (<Label>
    {label}
    <input type="checkbox" {...rest} />
    <div className="control-indicator"></div>
  </Label>);
};

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CheckBox;
