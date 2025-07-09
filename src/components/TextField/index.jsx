// components/TextField.js
import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

export const TextField = ({
  type = 'text',
  name,
  id,
  placeholder,
  value,
  onChange,
  onBlur,
  isInvalid,
  error,
  disabled,
  validationMessage,
  children,  
}) => {
  return (
    <FormGroup className="mb-3">
      <FormControl
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isInvalid={!!isInvalid}
        disabled={disabled}
      />

      {error && (
        <Form.Control.Feedback type="invalid">
          {error}
        </Form.Control.Feedback>
      )}

      {validationMessage && !error && (
        <div className="text-danger small mt-1">{validationMessage}</div>
      )}

      {children && <div className="text-danger small mt-1">{children}</div>}
    </FormGroup>
  );
};

const FormGroup = styled(Form.Group)``;

const FormControl = styled(Form.Control)`
  box-shadow: inset 0 0px 30px 20px #ffffff !important;
  font-family: 'Noto Sans', sans-serif;
  color: #3E3E3E !important;
  border: solid 2px #3E3E3E;
  font-weight: 600;
  border-radius: 0;
  font-size: 16px;
  outline: none;
  height: 48px;
`;
