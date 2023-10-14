import styled from 'styled-components';
import ShoppingCart from './ShoppingCart';
import ProductList from './ProductsList';
import { TitleBig } from '../universalStyles/universalStyles';
import { useDispatch } from 'react-redux';

const Wrapper = styled.main`
  padding: 50px 75px 100px;
  display: flex;
  gap: 30px;
  align-items: flex-start;
  @media (max-width: 1290px) {
    padding: 50px 32px 100px;
  }
  @media (max-width: 930px) {
    padding: 124px 64px 80px;
  }
  @media (max-width: 474px) {
    padding: 124px 10px 80px;
  }
`;
const CatalogTitle = styled(TitleBig)`
  max-width: max-content;
  @media (max-width: 930px) {
    font-size: 28px;
  }
`;
const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: calc(100% - 300px);

  @media (max-width: 1290px) {
    width: calc(100% - 300px);
  }

  @media (max-width: 930px) {
    width: 100%;
  }
`;

function Catalog({ selectedLink, products, width }) {
  return (
    <Wrapper>
      {width > 930 && <ShoppingCart />}
      <CatalogContainer>
        <CatalogTitle>{selectedLink.name}</CatalogTitle>
        <ProductList products={products} />
      </CatalogContainer>
    </Wrapper>
  );
}
export default Catalog;
