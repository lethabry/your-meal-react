import styled from 'styled-components';
import { TitleMiddle, Text, Weight } from '../universalStyles/universalStyles';

const ProductItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  background: #fff;
  padding: 12px;
  border-radius: 18px;
`;

const ProductItemImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: `Фотография бургера ${props.name}`,
}))`
  width: 276px;
  height: 220px;
  border-radius: 12px;
  margin-bottom: 16px;
`;

const ProductItemName = styled(Text)`
  margin: 8px 0 29px;
  line-height: 130%;
  font-size: 16px;
`;

const ProductItemWeight = styled(Weight)`
  font-size: 16px;
  font-weight: 600;
  line-height: 130%;
  margin-bottom: 8px;
`;

const ProductItemButton = styled.button.attrs(() => ({
  type: 'button',
}))`\
width: 100%;
background-color: #F2F2F3;
padding: 11px 0;
border: none;
border-radius: 12px;
color: #000;
font-family: Nunito;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 100%;
`;

function ProductItem({ src, name, price, weight }) {
  return (
    <ProductItemContainer>
      <ProductItemImage src={src} name={name} />
      <TitleMiddle>{price} &#160;₽</TitleMiddle>
      <ProductItemName>{name}</ProductItemName>
      <ProductItemWeight>{weight}&#160;г</ProductItemWeight>
      <ProductItemButton>Добавить</ProductItemButton>
    </ProductItemContainer>
  );
}

export default ProductItem;
