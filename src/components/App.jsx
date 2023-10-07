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

function App() {
  const [selectedLink, setSelectedLink] = useState(...links.slice(0, 1));
  const [products, setProducts] = useState(
    productsList.filter((products) => products.filter === 'burger')
  );
  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setProducts(productsList.filter((product) => product.filter === link.filter));
  };

  const [width, setWidth] = useState(window.innerWidth);
  const handleWidth = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWidth);
    return () => window.removeEventListener('resize', handleWidth);
  }, [width]);

  const [isProductPopupOpen, setIsProductPopupOpen] = useState(false);
  const handleOpenProductPopup = () => setIsProductPopupOpen(!isProductPopupOpen);
  const closePopups = () => setIsProductPopupOpen(false);

  return (
    <div className="App">
      <FontStyles />
      <BodyStyles />
      <Header />
      <NavigationLinks selectedLink={selectedLink} onClick={handleLinkClick} />
      {width <= 930 && <ShoppingCart />}
      <Catalog
        selectedLink={selectedLink}
        products={products}
        width={width}
        onImageClick={handleOpenProductPopup}
      />
      <Footer />
      <InfoPopup width={width} isPopupOpen={isProductPopupOpen} onClose={closePopups} />
    </div>
  );
}

export default App;
