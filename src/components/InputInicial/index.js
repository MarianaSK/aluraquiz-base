/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const InputInicial = styled.input`
    left: 1px;
    right: 1px;
    top: 1px;
    bottom: 1px;
    background: transparent;
    border-radius: 3.5px;
    border-color: #979797;
    outline: none;
    color: #fff;
    width: 281px;
    height: 38px;
    margin-top: 33px;
`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputInicial
        onChange={onChange}
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string,
};
