import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";


const CustomButton = ({ type, className, disabled, children, padding, onClick }) => {
  return (
    <StyledButton
      type={type}
      variant="dark"
      className={`fw-medium ${className}`}
      padding={padding}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default React.memo(CustomButton);
const StyledButton = styled(Button)`
  padding: ${({ padding }) => padding || '5px 20px'};
  width: ${({ width }) => width || "auto"};
  font-family: 'Noto Sans', sans-serif;
  border-radius: 0 !important;
  background: #3C3C3C;
  margin: 0 auto;
  display: block;
  height: 48px;
  &:hover {
    background: #212121;
  };
`;

