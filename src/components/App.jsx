import React from 'react';
import styled from 'styled-components';
import FontStyles from '../vendor/globalFonts';
import Header from './Header';

function App() {
  const Title = styled.h1`
    font-weight: 800;
    font-family: 'Nunito';
  `;
  return (
    <div className="App">
      <FontStyles />
      <Header />
      <Title>Hello world!</Title>
    </div>
  );
}

export default App;
