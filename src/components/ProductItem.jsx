import styled from 'styled-components';
import { TitleMiddle, Text, Weight, Button } from '../universalStyles/universalStyles';
import { useDispatch } from 'react-redux';
import { openInfoPopup } from '../store/popupSlice';

const ProductItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  background: #fff;
  padding: 12px;
  border-radius: 18px;
  @media (max-width: 930px) {
    padding: 4px;
  }
`;

const ProductItemImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: `Фотография бургера ${props.name}`,
}))`
  border-radius: 12px;
  margin-bottom: 16px;
  cursor: pointer;
`;

const ProductItemName = styled(Text)`
  margin: 8px 0 8px;
  height: 42px;
  line-height: 130%;
  font-size: 16px;

  @media (max-width: 930px) {
    height: 24px;
    font-size: 12px;
  }
`;

const ProductItemPrice = styled(TitleMiddle)`
  @media (max-width: 930px) {
    font-size: 16px;
  }
`;

const ProductItemWeight = styled(Weight)`
  font-size: 16px;
  font-weight: 600;
  line-height: 130%;
  margin-bottom: 8px;

  @media (max-width: 930px) {
    font-size: 12px;
  }
`;

const ProductItemButton = styled(Button)`
  background-color: #f2f2f3;
  color: #000;
  @media (max-width: 930px) {
    font-size: 12px;
  }
`;

function ProductItem({ src, name, price, weight }) {
  const dispatch = useDispatch();
  return (
    <ProductItemContainer>
      <ProductItemImage src={src} name={name} onClick={() => dispatch(openInfoPopup())} />
      <ProductItemPrice>{price} &#160;₽</ProductItemPrice>
      <ProductItemName>{name}</ProductItemName>
      <ProductItemWeight>{weight}&#160;г</ProductItemWeight>
      <ProductItemButton>Добавить</ProductItemButton>
    </ProductItemContainer>
  );
}

export default ProductItem;
