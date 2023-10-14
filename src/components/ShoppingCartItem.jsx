import styled from 'styled-components';
import {
  Text,
  Weight,
  CounterContainer,
  CounterButton,
  Count,
} from '../universalStyles/universalStyles';
import { useDispatch } from 'react-redux';
import { openInfoPopup } from '../store/popupSlice';

const Item = styled.div`
  display: grid;
  grid-template-columns: max-content auto 84px;
  grid-template-rows: repeat(3, 1fr);
  padding: 15px 0;
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
  cursor: pointer;
`;

const ShoppingCartItemWeight = styled(Weight)`
  grid-row: 2/3;
`;

const Price = styled(Text)`
  grid-row: 3/4;
`;

function ShoppingCartItem({ name, weight, price, src, count }) {
  const dispatch = useDispatch();
  return (
    <Item>
      <Image src={src} name={name} onClick={() => dispatch(openInfoPopup())} />
      <Text>{name}</Text>
      <ShoppingCartItemWeight>{weight}&#160;г</ShoppingCartItemWeight>
      <Price>{price}&#160;₽</Price>
      <CounterContainer>
        <CounterButton>-</CounterButton>
        <Count as="span">{count}</Count>
        <CounterButton>+</CounterButton>
      </CounterContainer>
    </Item>
  );
}
export default ShoppingCartItem;
