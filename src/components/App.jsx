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
import { useSelector } from 'react-redux';

function App() {
  const isPopupOpen = useSelector((state) => state.popup.isPopupOpen);

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
  const closePopups = () => {
    setIsProductPopupOpen(false);
    setIsDeliveryPopupOpen(false);
  };
  const [isDeliveryPopupOpen, setIsDeliveryPopupOpen] = useState(false);
  const handleOpenDeliveryPopup = () => setIsDeliveryPopupOpen(!isDeliveryPopupOpen);

  return (
    <div className="App">
      <FontStyles />
      <BodyStyles />
      <Header />
      <NavigationLinks selectedLink={selectedLink} onClick={handleLinkClick} />
      {width <= 930 && <ShoppingCart onDeliveryPopupClick={handleOpenDeliveryPopup} />}
      <Catalog
        selectedLink={selectedLink}
        products={products}
        width={width}
        onImageClick={handleOpenProductPopup}
        onDeliveryPopupClick={handleOpenDeliveryPopup}
      />
      <Footer />
      <InfoPopup width={width} isPopupOpen={isPopupOpen} />
      <DeliveryPopup isPopupOpen={isDeliveryPopupOpen} onClose={closePopups} />
    </div>
  );
}

export default App;
