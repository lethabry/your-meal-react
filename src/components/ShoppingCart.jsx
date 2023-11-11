import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LinkIcon } from './NavigationLink';
import ShoppingCartItem from './ShoppingCartItem';
import deliveryIcon from '../images/Доставка.png';
import { Counter, TitleMiddle, Button, Text } from '../universalStyles/universalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { openDeliveryPopup } from '../store/popupSlice';

const ShoppingCartContainer = styled.article`
  display: flex;
  box-sizing: border-box;
  padding: 21px 16px;
  flex-direction: column;
  background-color: #ffffff;
  min-width: 300px;
  max-width: 300px;
  margin-top: 72px;
  border-radius: 18px;

  @media (max-width: 930px) {
    position: absolute;
    height: ${(props) => (props.$isClicked ? '425px' : '8px')};
    margin: 36px 0 30px 64px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.7s ease;
    box-shadow: ${(props) => (props.$isClicked ? '0px 0px 10px 0px rgba(0, 0, 0, 0.16)' : 'none')};
  }

  @media (max-width: 474px) {
    margin: 30px 0 30px 10px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 12px;
  border-bottom: ${(props) => (props.$isEmpty ? 'none' : '1px solid #F2F2F3')};
`;

const ShoppingCartTitle = styled(TitleMiddle)`
  flex-grow: 2;

  @media (max-width: 930px) {
    font-size: 16px;
  }
`;

const SubTitle = styled.h3`
  margin: 0;
  margin-top: 16px;
  flex-grow: 2;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  @media (max-width: 930px) {
    font-size: 12px;
  }
`;

const Price = styled(SubTitle)`
  flex-grow: 0;
  @media (max-width: 930px) {
    font-size: 12px;
  }
`;

const ShoppingCartButton = styled(Button)`
  margin-bottom: 8px;
  margin-top: 12px;

  @media (max-width: 930px) {
    font-size: 12px;
  }
`;

const Delivery = styled.span`
  margin: 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  vertical-align: middle;
  @media (max-width: 930px) {
    font-size: 10px;
  }
`;

const DeliveryContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const ShoppingCartEmptyTest = styled(Text)`
  line-height: 130%;
`;

function ShoppingCart() {
  const dispatch = useDispatch();
  const shoppingCartList = useSelector((state) => state.shoppingCart.shoppingCart);
  const summaryCount = useSelector((state) => state.shoppingCart.summaryAmount);
  const summaryPrice = useSelector((state) => state.shoppingCart.summaryPrice);

  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => setIsEmpty(shoppingCartList.length === 0), [shoppingCartList]);

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => setIsClicked(!isClicked);

  return (
    <ShoppingCartContainer $isClicked={isClicked}>
      <TitleContainer $isEmpty={isEmpty} onClick={handleClick}>
        <ShoppingCartTitle>Корзина</ShoppingCartTitle>
        <Counter>{summaryCount}</Counter>
      </TitleContainer>
      {isEmpty ? (
        <ShoppingCartEmptyTest>{`Тут пока пусто :(`}</ShoppingCartEmptyTest>
      ) : (
        <>
          {shoppingCartList.map((item) => (
            <ShoppingCartItem key={item._id} product={item} />
          ))}
          <TitleContainer>
            <SubTitle>Итого</SubTitle>
            <Price>{summaryPrice}&#160;₽</Price>
          </TitleContainer>
          <ShoppingCartButton onClick={() => dispatch(openDeliveryPopup())}>
            Оформить заказ
          </ShoppingCartButton>
          <DeliveryContainer>
            <LinkIcon src={deliveryIcon} alt="Значок доставки" />
            <Delivery>{summaryPrice > 599 ? 'Бесплатная доставка' : 'Доставка платная'}</Delivery>
          </DeliveryContainer>
        </>
      )}
    </ShoppingCartContainer>
  );
}

export default ShoppingCart;
