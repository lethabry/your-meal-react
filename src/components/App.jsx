import React from 'react';
import styled from 'styled-components';
import FontStyles from '../globalStyles/globalFonts';
import BodyStyles from '../globalStyles/globalStyles';
import Header from './Header';
import NavigationLinks from './NavigationLinks';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
    <div className="App">
      <FontStyles />
      <BodyStyles />
      <Header />
      <NavigationLinks />
      <ShoppingCart />
    </div>
  );
}

export default App;
