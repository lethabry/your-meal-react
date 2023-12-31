import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../store/poductsSlice';
import { fetchLinks, setActive } from '../store/linksSlice';
import { getShoppingCartFetch } from '../store/shoppingCartSlice';
import FontStyles from '../globalStyles/globalFonts';
import BodyStyles from '../globalStyles/globalStyles';
import Header from './Header';
import NavigationLinks from './NavigationLinks';
import Catalog from './Catalog';
import Footer from './Footer';
import ShoppingCart from './ShoppingCart';
import InfoPopup from './InfoPopup';
import DeliveryPopup from './DeliveryPopup';
import { INITIAL_LINK_NAME } from '../utils/constants';

function App() {
  const dispatch = useDispatch();

  const [width, setWidth] = useState(window.innerWidth);
  const handleWidth = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWidth);
    return () => window.removeEventListener('resize', handleWidth);
  }, [width]);

  useEffect(() => {
    dispatch(fetchProducts(INITIAL_LINK_NAME));
    dispatch(fetchLinks())
      .then(() => dispatch(setActive(INITIAL_LINK_NAME)))
      .catch((err) => console.log(err));
    dispatch(getShoppingCartFetch());
  }, []);

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
