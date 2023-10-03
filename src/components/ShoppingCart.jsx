import styled from 'styled-components';
import { LinkIcon } from './NavigationLink';
import { shoppingCartArray } from '../utils/shoppingCartArray';
import ShoppingCartItem from './ShoppingCartItem';
import deliveryIcon from '../images/Доставка.png';
import { Counter, TitleMiddle } from '../universalStyles/universalStyles';

const ShoppingCartContainer = styled.article`
  display: flex;
  padding: 24px 16px;
  flex-direction: column;
  background-color: #ffffff;
  min-width: 300px;
  margin-top: 72px;
  border-radius: 18px;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ShoppingCartTitle = styled(TitleMiddle)`
  flex-grow: 2;
`;

const SubTitle = styled.h3`
  margin: 0;
  margin-top: 16px;
  flex-grow: 2;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

const Price = styled(SubTitle)`
  flex-grow: 0;
`;

const Button = styled.button.attrs(() => ({
  type: 'submit',
}))`
  width: 100%;
  border-radius: 12px;
  background: #ff7020;
  height: 40px;
  border: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  color: #fff;
  margin-bottom: 8px;
  margin-top: 24px;
  cursor: pointer;
`;

const Delivery = styled.span`
  margin: 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  vertical-align: middle;
`;

const DeliveryContainer = styled.div`
  display: flex;
  gap: 8px;
`;

function ShoppingCart() {
  return (
    <ShoppingCartContainer>
      <TitleContainer>
        <ShoppingCartTitle>Корзина</ShoppingCartTitle>
        <Counter>4</Counter>
      </TitleContainer>
      {shoppingCartArray.map((item) => (
        <ShoppingCartItem
          key={item.id}
          name={item.name}
          weight={item.weight}
          price={item.price}
          src={item.src}
          count={item.count}
        />
      ))}
      <TitleContainer>
        <SubTitle>Итого</SubTitle>
        <Price>1279&#160;₽</Price>
      </TitleContainer>
      <Button>Оформить заказ</Button>
      <DeliveryContainer>
        <LinkIcon src={deliveryIcon} alt="Значок доставки" />
        <Delivery>Бесплатная доставка</Delivery>
      </DeliveryContainer>
    </ShoppingCartContainer>
  );
}

export default ShoppingCart;
