import React, { useState } from 'react';
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
`;

function NavigationLinks() {
  const [selectedLink, setSelectedLink] = useState({});
  const handleClick = (link) => setSelectedLink(link);
  return (
    <Links>
      {links.map((link) => {
        return (
          <NavigationLink
            link={link}
            onClick={handleClick}
            key={link.id}
            name={link.name}
            icon={link.src}
            selectedLink={selectedLink}
          />
        );
      })}
    </Links>
  );
}

export default NavigationLinks;
