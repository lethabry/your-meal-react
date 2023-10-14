import styled from 'styled-components';
import { useState } from 'react';
import {
  Popup,
  PopupBlock,
  ButtonClose,
  TitleMiddle,
  Button,
} from '../universalStyles/universalStyles';
import DeliveryImagePath from '../images/Delivery.png';
import { useDispatch, useSelector } from 'react-redux';
import { closePopups } from '../store/popupSlice';

const DeliveryBlockPopup = styled(PopupBlock)`
  padding: 0;
  display: flex;
  background-color: #f9f9f9;
`;

const ImagePopup = styled.img.attrs((props) => ({
  src: props.src,
  alt: 'Картинка пончика',
}))`
  width: 100%;
`;

const ImageContent = styled.div`
  background-color: #ffab08;
  width: 50%;
  max-width: 342px;
  border-radius: 24px 0 0 24px;
  padding: 65px 21px 0px;
  @media (max-width: 930px) {
    display: none;
  }
`;

const DeliveryPopupTitle = styled(TitleMiddle)`
  @media (max-iwdth: 930px) {
    font-size: 16px;
  }
`;

const DeliveryFormContent = styled.div`
  padding: 44px 24px 24px;
  width: 50%;

  @media (max-width: 930px) {
    width: 100%;
    max-width: 300px;
  }

  @media (max-width: 474px) {
    max-width: none;
  }
`;

const DeliveryForm = styled.form`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
`;

const FormInputName = styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'Ваше имя',
  minLength: 2,
  maxLength: 32,
}))`
  margin-bottom: 8px;
  border-radius: 12px;
  border: 1px solid #f2f2f3;
  background: #fff;
  padding: 12px;
  width: calc(100% - 24px);
  transition: border 0.5s ease;
  &:hover {
    border: 1px solid #ffab08;
  }
  &:focus {
    outline: none;
    border: 1px solid #ffab08;
  }
`;
const FormInputPhone = styled(FormInputName).attrs(() => ({
  placeholder: 'Телефон',
  type: 'tel',
}))`
  margin-bottom: 16px;
`;

const FormInputAddress = styled(FormInputName).attrs(() => ({
  placeholder: 'Улица, дом, квартира',
}))`
  visibility: ${({ $deliveryState }) =>
    $deliveryState.selected === 'delivery' ? 'visible' : 'hidden'};
`;

const FormInputFloor = styled(FormInputName).attrs(() => ({
  inputMode: 'numeric',
  placeholder: 'Этаж',
  type: 'number',
}))``;

const FormInputIntercom = styled(FormInputName).attrs(() => ({
  inputMode: 'numeric',
  placeholder: 'Домофон',
  type: 'number',
}))``;

const FormRadioPickupInput = styled.input.attrs(() => ({
  type: 'radio',
  id: 'Pickup',
  name: 'Delivery',
  value: 'pickup',
}))`
  background-color: #fff;
  margin-bottom: 12px;
`;

const FormRadioPickupLabel = styled.label.attrs(() => ({
  htmlFor: 'Pickup',
}))`
  color: #000;
  font-family: Nunito;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 930px) {
    font-size: 10px;
  }
`;

const FormRadioDeliveryInput = styled(FormRadioPickupInput).attrs(() => ({
  id: 'Delivery',
  name: 'Delivery',
  value: 'delivery',
}))`
  margin-bottom: 16px;
`;

const FormRadioDeliveryLabel = styled(FormRadioPickupLabel).attrs(() => ({
  htmlFor: 'Delivery',
}))``;

const RadioRow = styled.div`
  display: flex;
  gap: 8px;
`;

const RadioRowDeliveryAdress = styled(RadioRow)`
  visibility: ${({ $deliveryState }) =>
    $deliveryState.selected === 'delivery' ? 'visible' : 'hidden'};
`;

const DeliveryButton = styled(Button).attrs(() => ({
  type: 'submit',
}))`
  margin-top: 32px;
  @media (max-width: 930px) {
    font-size: 12px;
  }
`;

function DeliveryPopup() {
  const dispatch = useDispatch();
  const [deliveryState, setDeliveryState] = useState({ selected: 'delivery' });
  const handleChangeDelivery = (e) => setDeliveryState({ selected: e.target.value });
  const isPopupOpen = useSelector((state) => state.popup.isDeliveryPopupOpen);

  return (
    <Popup $isPopupOpen={isPopupOpen}>
      <DeliveryBlockPopup>
        <ImageContent>
          <ImagePopup src={DeliveryImagePath} />
        </ImageContent>
        <DeliveryFormContent>
          <DeliveryPopupTitle>Доставка</DeliveryPopupTitle>
          <DeliveryForm>
            <FormInputName />
            <FormInputPhone />
            <RadioRow>
              <FormRadioPickupInput
                checked={deliveryState.selected === 'pickup'}
                onChange={(e) => handleChangeDelivery(e)}
              />
              <FormRadioPickupLabel>Самовывоз</FormRadioPickupLabel>
            </RadioRow>
            <RadioRow>
              <FormRadioDeliveryInput
                checked={deliveryState.selected === 'delivery'}
                onChange={(e) => handleChangeDelivery(e)}
              />
              <FormRadioDeliveryLabel>Доставка</FormRadioDeliveryLabel>
            </RadioRow>
            <FormInputAddress $deliveryState={deliveryState} />
            <RadioRowDeliveryAdress $deliveryState={deliveryState}>
              <FormInputFloor />
              <FormInputIntercom />
            </RadioRowDeliveryAdress>
            <DeliveryButton>Оформить</DeliveryButton>
          </DeliveryForm>
          <ButtonClose onClick={() => dispatch(closePopups())} />
        </DeliveryFormContent>
      </DeliveryBlockPopup>
    </Popup>
  );
}

export default DeliveryPopup;
