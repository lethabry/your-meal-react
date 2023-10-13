import styled from 'styled-components';
import ButtonClosePath from '../images/close.svg';

export const Counter = styled.p`
  margin: 0;
  padding: 2px 16px;
  background-color: #f2f2f3;
  border-radius: 6px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TitleBig = styled.h2`
  margin: 0;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
`;

export const TitleMiddle = styled(TitleBig)`
  font-size: 24px;
  line-height: 100%;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Weight = styled.p`
  margin: 0;
  color: #b1b1b1;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  cursor: pointer;
  width: 100%;
  height: 40px;
  border-radius: 12px;
  background-color: #ff7020;
  border: none;
  color: #fff;
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ffab08;
  }
`;

export const CounterContainer = styled.div`
  border-radius: 12px;
  background: #f2f2f3;
`;

export const CounterButton = styled.button.attrs(() => ({
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

export const Count = styled(Counter)`
  display: inline-block;
  text-align: center;
  padding: 0;
  width: 33.33%;
`;

export const Popup = styled.div`
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

export const PopupBlock = styled.div`
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

export const ButtonClose = styled.button.attrs(() => ({
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
  scale: 1;
  transition: scale 0.5s ease;
  &:hover {
    scale: 1.2;
  }
`;
