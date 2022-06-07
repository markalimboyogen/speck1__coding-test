import React from 'react';
import styled from 'styled-components';

const Styled = {
  Input: styled.div`
    input {
      border: 1px solid var(--tf-black--lighter);
      border-radius: 4px;
      box-sizing: border-box;
      display: block;
      height: 42px;
      padding: 12px 16px;
      width: 100%;
    }

    input:focus {
      outline: 1px solid var(--tf-cyan);
    }
  `,
  Label: styled.label`
    display: block;
    font-size: 0.88rem;
    margin-bottom: 4px;
  `,
};

const TfTextInput = ({
  label,
  name,
  placeholder,
  value,
  onValueChange = () => {},
}) => {
  return (
    <div>
      {label ? (
        <Styled.Label>
          <small>{label}</small>
        </Styled.Label>
      ) : (
        ''
      )}
      <Styled.Input>
        <input
          name={name}
          onChange={(e) => onValueChange(e)}
          placeholder={placeholder}
          type="text"
          value={value}
        />
      </Styled.Input>
    </div>
  );
};

export default TfTextInput;
