// components/TextField.js
import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

export const CheckBox = ({ label, disabled, name, checked, onChange }) => {
  return (
    <FormCheck
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      label={label}
    />
  );
};

const FormCheck = styled(Form.Check)`
  align-items: center;
  display: flex;
  padding: 0;
  .form-check-input {
    box-shadow: none !important;
    border: solid 2px #000000;
    border-radius: 0 !important;
    margin: 0 !important;
    cursor: pointer;
    height: 32px;
    width: 32px;
    &:checked{
      border-color: #0d6efd;
    }
  }
  label {
    padding: 0 0 0 15px;
    color: #3d3d3d;
    font-weight: 600;
    font-size: 16px;
  }
`;
