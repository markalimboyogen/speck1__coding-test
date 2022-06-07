import React from 'react';
import styled from "styled-components";

// components
import TfUserList from './features/TfUserList/TfUserList';

const Styled = {
  Wrapper: styled.div`
    margin: auto;
    max-width: 1024px;
    padding-top: 48;
  `,
};

const App = () => {
  return <Styled.Wrapper><TfUserList /></Styled.Wrapper>;
}

export default App;