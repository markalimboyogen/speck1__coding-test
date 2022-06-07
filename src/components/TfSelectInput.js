import React from 'react';
import styled from 'styled-components';

const Styled = {
  Select: styled.div`
    select {
      border: 1px solid var(--tf-black--lighter);
      border-radius: 4px;
      box-sizing: border-box;
      display: block;
      height: 42px;
      padding: 12px 16px;
      width: 100%;
    }

    select:focus {
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
  options,
  value,
  onValueChange = () => {},
}) => {
  return (
    <div>
      <Styled.Label>
        <small>{label}</small>
      </Styled.Label>
      <Styled.Select>
        <select name={name} value={value} onChange={(e) => onValueChange(e)}>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </Styled.Select>
    </div>
  );
};

export default TfTextInput;
