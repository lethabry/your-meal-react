import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  TitleBig,
  Text,
  Weight,
  Button,
  CounterContainer,
  CounterButton,
  Count,
  Popup,
  PopupBlock,
  ButtonClose,
} from '../universalStyles/universalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { closePopups } from '../store/popupSlice';
import {
  addProductFetch,
  getShoppingCartFetch,
  deleteProductFetch,
  changeAmountFetch,
} from '../store/shoppingCartSlice';

const PopupTitle = styled(TitleBig)`
  margin-bottom: 24px;
  @media (max-width: 812px) {
    font-size: 28px;
  }
`;
const InfoPopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  flex-shrink: 2;
  width: calc(100% - 16px - 16px);
  @media (max-width: 474px) {
    width: 100%;
  }
`;
const InfoPopupMain = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 474px) {
    flex-direction: column;
  }
`;
const InfoPopupImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: 'Фотография бургера',
}))`
  width: 100%;
  max-width: 276px;
  height: 100%;
  max-height: 220px;
  border-radius: 16px;
  @media (max-width: 474px) {
    max-width: 100%;
    width: 100%;
  }
`;
const PopupButton = styled(Button)``;
const PopupText = styled(Text)`
  font-size: 16px;
  line-height: 130%;
  width: 344px;
  margin-bottom: 10px;
  @media (max-width: 812px) {
    max-width: 344px;
    width: 100%;
    font-size: 12px;
  }
`;
const PopupList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  @media (max-width: 812px) {
    font-size: 10px;
  }
`;
const PopupItem = styled(Text)`
  line-height: 130%;
  margin-bottom: 2px;
  &:last-of-type {
    margin-bottom: 4px;
  }
  @media (max-width: 812px) {
    font-size: 10px;
  }
`;
const PopupCounterContainer = styled(CounterContainer)`
  padding: 9px 12px;
  width: 84px;
`;
const PopupCounterButton = styled(CounterButton)``;
const PopupCount = styled(Count)`
  font-size: 16px;
  @media (max-width: 812px) {
    font-size: 12px;
  }
`;
const PopupWeight = styled(Weight)`
  @media (max-width: 812px) {
    font-size: 10px;
  }
`;
const PopupPrice = styled(TitleBig)`
  font-size: 24px;
  line-height: 120%;
  flex-grow: 2;
  text-align: right;
  @media (max-width: 812px) {
    font-size: 16px;
  }
  @media (max-width: 474px) {
    width: 100%;
  }
`;
const PopupRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
`;
function InfoPopup({ width }) {
  const dispatch = useDispatch();
  const isPopupOpen = useSelector((state) => state.popup.infoPopup.isInfoPopupOpen);
  const popupContent = useSelector((state) => state.popup.infoPopup.content);
  const shoppingCartList = useSelector((state) => state.shoppingCart.shoppingCart);
  const [updatedPopupFields, setUpdatedPopupFields] = useState({
    isInShoppingCart: false,
    amount: null,
    currentId: null,
  });

  useEffect(() => {
    setUpdatedPopupFields(() => {
      const isInShoppingCart = shoppingCartList.some(
        (item) => item.name === popupContent.name && item.image === popupContent.image
      );
      const isMatch = shoppingCartList.find(
        (item) => item.name == popupContent.name && item.image === popupContent.image
      );
      const amount = isMatch ? isMatch.amount : 1;
      const currentId = isMatch ? isMatch._id : null;
      return { isInShoppingCart, amount, currentId };
    });
  }, [shoppingCartList, isPopupOpen]);

  const addProduct = (product) => {
    dispatch(addProductFetch(product)).then(() => dispatch(getShoppingCartFetch()));
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
    <Popup $isPopupOpen={isPopupOpen}>
      <PopupBlock>
        <PopupTitle>{popupContent.name}</PopupTitle>
        <InfoPopupMain>
          <InfoPopupContent>
            <InfoPopupImage src={popupContent.image} alt={`Фотография ${popupContent.name}`} />
            {width > 474 && (
              <PopupButton onClick={() => addProduct(popupContent)}>
                {updatedPopupFields.isInShoppingCart ? 'Добавлено' : 'Добавить'}
              </PopupButton>
            )}
          </InfoPopupContent>
          <InfoPopupContent>
            <div>
              <PopupText>{popupContent.description}</PopupText>
              <PopupList>
                Состав:
                {popupContent && popupContent.structure
                  ? popupContent.structure.map((ingredient, index) => (
                      <PopupItem key={index} as="li">
                        {ingredient}
                      </PopupItem>
                    ))
                  : ''}
              </PopupList>
              <PopupWeight>{popupContent.weight} г.</PopupWeight>
            </div>
            <PopupRow>
              {width > 474 ? (
                <>
                  <PopupCounterContainer>
                    <PopupCounterButton
                      disabled={!updatedPopupFields.isInShoppingCart}
                      onClick={() =>
                        changeProductAmount(
                          updatedPopupFields.currentId,
                          updatedPopupFields.amount,
                          '-'
                        )
                      }
                    >
                      -
                    </PopupCounterButton>
                    <PopupCount as="span">{updatedPopupFields.amount}</PopupCount>
                    <PopupCounterButton
                      disabled={!updatedPopupFields.isInShoppingCart}
                      onClick={() =>
                        changeProductAmount(
                          updatedPopupFields.currentId,
                          updatedPopupFields.amount,
                          '+'
                        )
                      }
                    >
                      +
                    </PopupCounterButton>
                  </PopupCounterContainer>
                  <PopupPrice as="p">{popupContent.price}₽</PopupPrice>
                </>
              ) : (
                <>
                  <PopupButton>
                    {updatedPopupFields.isInShoppingCart ? 'Добавлено' : 'Добавить'}
                  </PopupButton>
                  <PopupCounterContainer>
                    <PopupCounterButton>-</PopupCounterButton>
                    <PopupCount as="span">{updatedPopupFields.amount}</PopupCount>
                    <PopupCounterButton>+</PopupCounterButton>
                  </PopupCounterContainer>
                </>
              )}
            </PopupRow>
            {width <= 474 && <PopupPrice as="p">{popupContent.price}₽</PopupPrice>}
          </InfoPopupContent>
        </InfoPopupMain>
        <ButtonClose onClick={() => dispatch(closePopups())} />
      </PopupBlock>
    </Popup>
  );
}
export default InfoPopup;
