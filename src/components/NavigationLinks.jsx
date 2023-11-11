import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import NavigationLink from './NavigationLink';
import { navigationLinksIcons } from '../utils/navigationLinksIcons';

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

  return (
    <Links>
      {navigateLinks.map((link, index) => (
        <NavigationLink
          key={link._id}
          name={link.name}
          icon={navigationLinksIcons[index]}
          selected={link.selected}
        />
      ))}
    </Links>
  );
}

export default NavigationLinks;
