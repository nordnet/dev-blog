import styled from 'styled-components';
import {Flexbox, Typography} from '@nordnet/ui';
import Link from './mdx/Link';

export const UpperCase = styled.span`
  text-transform: uppercase;
`
export const Capitalize = styled.span`
  text-transform: capitalize;
`

export const MetaLink = (props) =>{
  return <Link color={(t) => t.color.label} hoverColor={t => t.color.cta} {...props} />
}

export const MetaItem = ({children}) => {
  return <Flexbox item><Typography color={(t) => t.color.label}>{children}</Typography></Flexbox>
}

export const MetaRow = ({children, justifyContent="center"}) => {
  return <Flexbox justifyContent={justifyContent} container gutter={5} >{children}</Flexbox>
}