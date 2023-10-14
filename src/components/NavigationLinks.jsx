import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActive } from '../store/linksSlice';
import styled from 'styled-components';
import NavigationLink from './NavigationLink';

const Links = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  padding: 0;
  margin: 0;
  padding-top: 42px;

  @media (max-width: 930px) {
    gap: 12px;
    padding: 30px 64px 0;
  }

  @media (max-width: 474px) {
    padding: 30px 10px 0;
    gap: 8px;
  }
`;

function NavigationLinks() {
  const navigateLinks = useSelector((state) => state.links.links);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActive('Бургеры'));
  }, []);

  return (
    <Links>
      {navigateLinks.map((link) => (
        <NavigationLink
          link={link}
          key={link.id}
          name={link.name}
          icon={link.src}
          selected={link.selected}
        />
      ))}
    </Links>
  );
}

export default NavigationLinks;
