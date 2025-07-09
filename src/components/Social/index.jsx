import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Social = ({ icon, label, link }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <SocialButton type="button" onClick={handleClick} aria-label={label}>
      <img src={icon} alt={label} />
    </SocialButton>
  );
};

export default Social;

const SocialButton = styled(Button)`
  background-color: transparent !important;
  background: none !important;
  border-radius: 50% !important;
  justify-content: center;
  padding: 0 !important;
  display: inline-flex;
  align-items: center;
  height: 48px;
  width: 48px;
  img {
    height: 48px;
    width: 48px;
    &:hover {
      filter: drop-shadow(2px 4px 6px black);
    }
  }
`;
