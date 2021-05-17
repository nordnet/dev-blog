import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

const A = styled.a`
  text-decoration: none;
  color: blue;
  &:any-link {
    color: blue;
  }
`;

export const Link = ({ className, target, as, rel, href, children }) => {
  return (
    <NextLink href={href || ''} as={as} passHref>
      <A className={className} target={target} rel={rel}>
        {children}
      </A>
    </NextLink>
  );
};

export default Link;