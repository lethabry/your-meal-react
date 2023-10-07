import styled from 'styled-components';
import {
  TitleBig,
  Text,
  Weight,
  Button,
  CounterContainer,
  CounterButton,
  Count,
} from '../universalStyles/universalStyles';
import ImagePath from '../images/burger_1.png';
import ButtonClosePath from '../images/close.svg';

const Popup = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: ${(props) => (props.isPopupOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isPopupOpen ? '1' : '0')};
  display: flex;
  transition: all 0.5s ease;
  justify-content: center;
  align-items: center;
`;
const PopupBlock = styled.div`
  position: relative;
  padding: 24px 24px 36px;
  border-radius: 24px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  background: #fff;
  @media (max-width: 812px) {
    padding: 16px 16px 24px;
    width: calc(100% - 64px - 64px);
  }
  @media (max-width: 474px) {
    width: 100%;
    height: calc(100vh - 16px - 24px);
  }
`;
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
    object-fit: cover;
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
`;
const ButtonClose = styled.button.attrs(() => ({
  type: 'button',
}))`
  width: 24px;
  height: 24px;
  padding: 0;
  background-image: url(${ButtonClosePath});
  background-size: contain;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
`;
const PopupRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
`;
function InfoPopup({ width, isPopupOpen, onClose }) {
  return (
    <Popup isPopupOpen={isPopupOpen}>
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
          </InfoPopupContent>
        </InfoPopupMain>
        <ButtonClose onClick={onClose} />
      </PopupBlock>
    </Popup>
  );
}
export default InfoPopup;
