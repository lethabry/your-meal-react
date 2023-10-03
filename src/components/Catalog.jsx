import styled from 'styled-components';
import ShoppingCart from './ShoppingCart';
import ProductList from './ProductsList';
import { TitleBig } from '../universalStyles/universalStyles';

const Wrapper = styled.main`
  padding: 50px 0 100px;
  display: flex;
  gap: 30px;
  align-items: flex-start;
  justify-content: center;
`;
const CatalogTitle = styled(TitleBig)`
  max-width: max-content;
`;
const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function Catalog({ selectedLink, products }) {
  return (
    <Wrapper>
      <ShoppingCart />
      <CatalogContainer>
        <CatalogTitle>{selectedLink.name}</CatalogTitle>
        <ProductList products={products} />
      </CatalogContainer>
    </Wrapper>
  );
}
export default Catalog;
