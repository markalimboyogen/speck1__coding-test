import React from 'react';
import styled from 'styled-components';

const Styled = {
  Button: styled.button`
    background: ${({ disabled }) =>
      disabled ? `var(--tf-black--lightest)` : `var(--tf-cyan)`};
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    color: white;
    cursor: pointer;
    height: 42px;
    padding: 12px 24px;
    :hover {
      background: ${({ disabled }) =>
        disabled ? `var(--tf-black--lightest)` : `var(--tf-cyan--hover)`};
    }
  `,
};

const TfButton = ({ disabled, label, onButtonClick = () => {} }) => {
  return (
    <Styled.Button disabled={disabled} onClick={(e) => onButtonClick(e)}>
      {label}
    </Styled.Button>
  );
};

export default TfButton;
