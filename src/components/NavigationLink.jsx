import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setActive } from '../store/linksSlice';
import { filterProducts } from '../store/poductsSlice';

const Link = styled.li.attrs((props) => ({
  selected: props.selected,
}))`
  display: flex;
  align-items: center;
  padding: 0;
  padding: 8px 14px;
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0);
  gap: 8px;
  background-color: ${(props) => (props.selected ? '#FFAB08' : '#FFF')};
  transition: border 0.5s ease;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    border: 1px solid #f86310;
  }
`;
export const LinkIcon = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 24px;
  height: 24px;
  object-fit: cover;
`;

const LinkText = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #000;

  @media (max-width: 930px) {
    font-size: 12px;
  }
`;

function NavigationLink({ name, icon, link, selected }) {
  const dispatch = useDispatch();

  const handleClick = (link) => {
    const filterName = link.filter;
    dispatch(setActive(name));
    dispatch(filterProducts(filterName));
  };

  return (
    <Link selected={selected} name={name} onClick={() => handleClick(link)}>
      <LinkIcon src={icon} />
      <LinkText>{name}</LinkText>
    </Link>
  );
}

export default NavigationLink;
