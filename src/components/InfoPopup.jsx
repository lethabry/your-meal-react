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
import ImagePath from '../images/burger_1.png';
import { useDispatch, useSelector } from 'react-redux';
import { closePopups } from '../store/popupSlice';

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
  const isPopupOpen = useSelector((state) => state.popup.isInfoPopupOpen);
  return (
    <Popup $isPopupOpen={isPopupOpen}>
      <PopupBlock>
        <PopupTitle>Мясная бомба</PopupTitle>
        <InfoPopupMain>
          <InfoPopupContent>
            <InfoPopupImage src={ImagePath} />
            {width > 474 && <PopupButton>Добавить</PopupButton>}
          </InfoPopupContent>
          <InfoPopupContent>
            <div>
              <PopupText>
                Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит
                вас своей сочностью, а хрустящие листья салата добавят свежести.
              </PopupText>
              <PopupList>
                Состав:
                <PopupItem as="li">Пшеничная булочка</PopupItem>
                <PopupItem as="li">Котлета из говядины</PopupItem>
                <PopupItem as="li">Красный лук</PopupItem>
                <PopupItem as="li">Листья салата</PopupItem>
                <PopupItem as="li">Соус горчичный</PopupItem>
              </PopupList>
              <PopupWeight>520г, ккал 430</PopupWeight>
            </div>
            <PopupRow>
              {width > 474 ? (
                <>
                  <PopupCounterContainer>
                    <PopupCounterButton>-</PopupCounterButton>
                    <PopupCount as="span">1</PopupCount>
                    <PopupCounterButton>+</PopupCounterButton>
                  </PopupCounterContainer>
                  <PopupPrice as="p">689₽</PopupPrice>
                </>
              ) : (
                <>
                  <PopupButton>Добавить</PopupButton>
                  <PopupCounterContainer>
                    <PopupCounterButton>-</PopupCounterButton>
                    <PopupCount as="span">1</PopupCount>
                    <PopupCounterButton>+</PopupCounterButton>
                  </PopupCounterContainer>
                </>
              )}
            </PopupRow>
            {width <= 474 && <PopupPrice as="p">689₽</PopupPrice>}
          </InfoPopupContent>
        </InfoPopupMain>
        <ButtonClose onClick={() => dispatch(closePopups())} />
      </PopupBlock>
    </Popup>
  );
}
export default InfoPopup;
