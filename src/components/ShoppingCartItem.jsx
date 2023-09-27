import styled from 'styled-components';
import { Counter } from './ShoppingCart';

const Item = styled.div`
  display: grid;
  grid-template-columns: max-content auto 84px;
  grid-template-rows: repeat(3, 1fr);
  padding: 15px 0;
  border-bottom: 1px solid #f2f2f3;
  column-gap: 6px;
`;

const Image = styled.img.attrs((props) => ({
  src: props.src,
  alt: `Фотография ${props.name}`,
}))`
  grid-row: 1/4;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Weight = styled.p`
  margin: 0;
  color: #b1b1b1;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  grid-row: 2/3;
`;

const Price = styled.p`
  margin: 0;
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  grid-row: 3/4;
`;

const CounterContainer = styled.div`
  border-radius: 12px;
  background: #f2f2f3;
`;
const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 33.33%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Count = styled(Counter)`
  display: inline-block;
  text-align: center;
  padding: 0;
  width: 33.33%;
`;

function ShoppingCartItem({ name, weight, price, src, count }) {
  return (
    <Item>
      <Image src={src} name={name} />
      <Title>{name}</Title>
      <Weight>{weight}</Weight>
      <Price>{price}</Price>
      <CounterContainer>
        <Button>-</Button>
        <Count as="span">{count}</Count>
        <Button>+</Button>
      </CounterContainer>
    </Item>
  );
}
export default ShoppingCartItem;
