import styled from 'styled-components';
import ProductItem from './ProductItem';

const List = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 30px;
  list-style: none;
  margin: 0;
  max-width: 960px;
`;

function ProductList({ products }) {
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
