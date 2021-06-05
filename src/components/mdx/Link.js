import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

const getColor = (props) => {
  const { $color, theme } = props;

  if ($color && typeof $color === 'function') {
    return $color(theme);
  }

  if ($color === 'inherit') {
    return 'inherit';
  }

  return theme.color.cta;
};

const getHoverColor = (props) => {
  const { $hoverColor, theme } = props;
  if ($hoverColor && typeof $hoverColor === 'function') {
    return $hoverColor(theme);
  }

  if ($hoverColor === 'inherit') {
    return 'inherit';
  }

  return getColor(props);
};

const A = styled.a`
  text-decoration: none;
  color: ${(p) => getColor(p)};
  &:hover {
    color: ${p => getHoverColor(p)}
  }

`;



export const Link = ({ className, target, as, rel, href, color, hoverColor, children }) => {
  return (
    <NextLink href={href || ''} as={as} passHref>
      <A className={className} target={target} rel={rel} $color={color} $hoverColor={hoverColor}>
        {children}
      </A>
    </NextLink>
  );
};

export default Link;