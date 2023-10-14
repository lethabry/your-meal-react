import React, { useState, useEffect } from 'react';
import FontStyles from '../globalStyles/globalFonts';
import BodyStyles from '../globalStyles/globalStyles';
import Header from './Header';
import NavigationLinks from './NavigationLinks';
import Catalog from './Catalog';
import Footer from './Footer';
import ShoppingCart from './ShoppingCart';
import InfoPopup from './InfoPopup';
import DeliveryPopup from './DeliveryPopup';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWidth = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleWidth);
    return () => window.removeEventListener('resize', handleWidth);
  }, [width]);
  return (
    <div className="App">
      <FontStyles />
      <BodyStyles />
      <Header />
      <NavigationLinks />
      {width <= 930 && <ShoppingCart />}
      <Catalog width={width} />
      <Footer />
      <InfoPopup width={width} />
      <DeliveryPopup />
    </div>
  );
}

export default App;
