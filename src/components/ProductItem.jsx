import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TitleMiddle, Text, Weight, Button } from '../universalStyles/universalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { openInfoPopup, getInfoPopupContent } from '../store/popupSlice';
import { addProductFetch, getShoppingCartFetch } from '../store/shoppingCartSlice';

const ProductItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  background: #fff;
  padding: 12px;
  border-radius: 18px;
  @media (max-width: 930px) {
    padding: 4px;
  }
`;

const ProductItemImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: `Фотография бургера ${props.name}`,
}))`
  border-radius: 12px;
  margin-bottom: 16px;
  cursor: pointer;
  aspect-ratio: 1.25/1;
  object-fit: cover;
  @media (max-width: 930px) {
    aspect-ratio: 1.15/1;
  }
`;

const ProductItemName = styled(Text)`
  margin: 8px 0 8px;
  height: 42px;
  line-height: 130%;
  font-size: 16px;

  @media (max-width: 930px) {
    height: 24px;
    font-size: 12px;
  }
`;

const ProductItemPrice = styled(TitleMiddle)`
  @media (max-width: 930px) {
    font-size: 16px;
  }
`;

const ProductItemWeight = styled(Weight)`
  font-size: 16px;
  font-weight: 600;
  line-height: 130%;
  margin-bottom: 8px;

  @media (max-width: 930px) {
    font-size: 12px;
  }
`;

const ProductItemButton = styled(Button).attrs((props) => ({
  isInShoppingCart: props.isInShoppingCart,
}))`
  background-color: ${(props) => (props.$isInShoppingCart ? '#FFAB08' : '#f2f2f3')};
  color: #000;
  @media (max-width: 930px) {
    font-size: 12px;
  }
`;

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const shoppingCartList = useSelector((state) => state.shoppingCart.shoppingCart);
  const [isInShoppingCart, setIsInShoppingCart] = useState(false);

  useEffect(() => {
    setIsInShoppingCart(
      shoppingCartList.some((item) => item.name === product.name && item.image === product.image)
    );
  }, [shoppingCartList]);

  const handleClick = (product) => {
    dispatch(openInfoPopup());
    dispatch(getInfoPopupContent(product));
  };

  const addProduct = (product) => {
    dispatch(addProductFetch(product)).then(() => dispatch(getShoppingCartFetch()));
  };

  return (
    <ProductItemContainer>
      <ProductItemImage
        src={product.image}
        name={product.name}
        onClick={() => handleClick(product)}
      />
      <ProductItemPrice>{product.price} &#160;₽</ProductItemPrice>
      <ProductItemName>{product.name}</ProductItemName>
      <ProductItemWeight>{product.weight}&#160;г</ProductItemWeight>
      <ProductItemButton
        $isInShoppingCart={isInShoppingCart}
        disabled={isInShoppingCart}
        onClick={() => addProduct(product)}
      >
        {isInShoppingCart ? 'Добавлено' : 'Добавить'}
      </ProductItemButton>
    </ProductItemContainer>
  );
}

export default ProductItem;
