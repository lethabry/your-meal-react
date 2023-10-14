import styled from 'styled-components';
import ProductItem from './ProductItem';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts } from '../store/poductsSlice';

const List = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 30px;
  row-gap: 24px;
  list-style: none;
  margin: 0;
  width: 100%;

  @media (max-width: 930px) {
    grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
    column-gap: 20px;
    row-gap: 20px;
  }
  @media (max-width: 474px) {
    column-gap: 10px;
    row-gap: 14px;
  }
`;

function ProductList() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterProducts('burger'));
  }, []);

  return (
    <List>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          src={product.image}
          weight={product.weight}
          price={product.price}
          name={product.name}
        />
      ))}
    </List>
  );
}

export default ProductList;
