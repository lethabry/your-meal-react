import React, { useState, useEffect } from 'react';
import FontStyles from '../globalStyles/globalFonts';
import BodyStyles from '../globalStyles/globalStyles';
import Header from './Header';
import NavigationLinks from './NavigationLinks';
import Catalog from './Catalog';
import Footer from './Footer';
import { links } from '../utils/linksArray';
import { productsList } from '../utils/products';
import ShoppingCart from './ShoppingCart';
import InfoPopup from './InfoPopup';
import DeliveryPopup from './DeliveryPopup';
import { useSelector, useDispatch } from 'react-redux';
import { filterProducts } from '../store/poductsSlice';

function App() {
  const dispatch = useDispatch();
  const [selectedLink, setSelectedLink] = useState(...links.slice(0, 1));
  const handleLinkClick = (link) => {
    const filterName = link.filter;
    setSelectedLink(link);
    dispatch(filterProducts(filterName));
  };
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
      <NavigationLinks selectedLink={selectedLink} onClick={handleLinkClick} />
      {width <= 930 && <ShoppingCart />}
      <Catalog selectedLink={selectedLink} width={width} />
      <Footer />
      <InfoPopup width={width} />
      <DeliveryPopup />
    </div>
  );
}

export default App;
