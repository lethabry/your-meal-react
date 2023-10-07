import styled from 'styled-components';

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
