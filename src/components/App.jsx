import React, { useState } from 'react';
import FontStyles from '../globalStyles/globalFonts';
import BodyStyles from '../globalStyles/globalStyles';
import Header from './Header';
import NavigationLinks from './NavigationLinks';
import Catalog from './Catalog';
import Footer from './Footer';
import { links } from '../utils/linksArray';
import { productsList } from '../utils/products';

function App() {
  const [selectedLink, setSelectedLink] = useState(...links.slice(0, 1));
  const [products, setProducts] = useState(
    productsList.filter((products) => products.filter === 'burger')
  );
  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setProducts(productsList.filter((product) => product.filter === link.filter));
  };

  return (
    <div className="App">
      <FontStyles />
      <BodyStyles />
      <Header />
      <NavigationLinks selectedLink={selectedLink} onClick={handleLinkClick} />
      <Catalog selectedLink={selectedLink} products={products} />
      <Footer />
    </div>
  );
}

export default App;
