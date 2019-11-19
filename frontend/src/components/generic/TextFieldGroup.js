import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({ placeholder, value, label, error, type, onChange, checkUserExists }) => {
  return (
    <div className={classnames('ui form', { 'has-error': error })}>
     <div className="field">
      <label className="control-label">{label}</label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        className="form-control"
      />
    {error && <span className="help-block">{error}</span>}
    </div>
    </div>  );
}

TextFieldGroup.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder:PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
