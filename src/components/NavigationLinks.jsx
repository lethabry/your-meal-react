import React from 'react';
import styled from 'styled-components';
import { links } from '../utils/linksArray';
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

function NavigationLinks({ selectedLink, onClick }) {
  return (
    <Links>
      {links.map((link) => (
        <NavigationLink
          link={link}
          onClick={onClick}
          key={link.id}
          name={link.name}
          icon={link.src}
          selectedLink={selectedLink}
        />
      ))}
    </Links>
  );
}

export default NavigationLinks;