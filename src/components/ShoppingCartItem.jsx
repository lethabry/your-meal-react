import styled from 'styled-components';
import {
  Text,
  Weight,
  CounterContainer,
  CounterButton,
  Count,
} from '../universalStyles/universalStyles';
import { useDispatch } from 'react-redux';
import { openInfoPopup, getInfoPopupContent } from '../store/popupSlice';
import {
  deleteProductFetch,
  changeAmountFetch,
  getShoppingCartFetch,
} from '../store/shoppingCartSlice';

const Item = styled.div`
  display: grid;
  grid-template-columns: max-content auto 84px;
  grid-template-rows: repeat(3, 1fr);
  padding: 16px 0;
  border-bottom: 1px solid #f2f2f3;
  column-gap: 6px;
  @media (max-width: 930px) {
    padding: 12px 0;
  }
`;

const Image = styled.img.attrs((props) => ({
  src: props.src,
  alt: `Фотография ${props.name}`,
}))`
  grid-row: 1/4;
  border-radius: 8px;
  width: 64px;
  max-height: 52px;
  cursor: pointer;
`;

const ShoppingCartItemWeight = styled(Weight)`
  grid-row: 2/3;
`;

const Price = styled(Text)`
  grid-row: 3/4;
`;

const ShoppingCartContainer = styled(CounterContainer)`
  grid-row: 1/4;
  max-height: 40px;
  display: flex;
  align-items: center;
`;

const ShoppingCartName = styled(Text)`
  max-height: 16px;
  max-width: 108px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function ShoppingCartItem({ product }) {
  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(openInfoPopup());
    dispatch(getInfoPopupContent(product));
  };

  const deleteProductFromShoppingCart = (productId) => {
    dispatch(deleteProductFetch(productId)).then(() => dispatch(getShoppingCartFetch()));
  };

  const changeProductAmount = (productId, count, operator) => {
    if (count === 1 && operator === '-') {
      deleteProductFromShoppingCart(productId);
      return;
    }
    let amount;
    switch (operator) {
      case '+':
        amount = count + 1;
        break;
      case '-':
        amount = count - 1;
        break;
    }
    const data = { productId, amount };
    dispatch(changeAmountFetch(data)).then(() => dispatch(getShoppingCartFetch()));
  };

  return (
    <Item>
      <Image src={product.image} name={product.name} onClick={() => handleClick(product)} />
      <ShoppingCartName>{product.name}</ShoppingCartName>
      <ShoppingCartItemWeight>{product.weight}&#160;г</ShoppingCartItemWeight>
      <Price>{product.price}&#160;₽</Price>
      <ShoppingCartContainer>
        <CounterButton onClick={() => changeProductAmount(product._id, product.amount, '-')}>
          -
        </CounterButton>
        <Count as="span">{product.amount}</Count>
        <CounterButton onClick={() => changeProductAmount(product._id, product.amount, '+')}>
          +
        </CounterButton>
      </ShoppingCartContainer>
    </Item>
  );
}
export default ShoppingCartItem;
