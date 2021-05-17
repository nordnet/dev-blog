import {Typography} from '@nordnet/ui';
import styled from 'styled-components';

export const H1 = (props) => {
  return <Typography type="title1" as="h1" {...props} />
}

export const H2 = (props) => {
  return <Typography type="title2" as="h2" {...props} />
}

export const H3 = (props) => {
  return <Typography type="title3" as="h3" {...props} />
}

export const H4 = (props) => {
  return <Typography type="primary" as="h4" {...props} />
}

export const H5 = (props) => {
  return <Typography type="secondary" as="h5" {...props} />
}

export const H6 = (props) => {
  return <Typography type="tertiary" as="h6" {...props} />
}

export const P = (props) => {
  return <Typography as="div" {...props} />
}

export const Strong = (props) => {
  return <Typography weight="bold" {...props}/>
}

export const Em = (props) => {
 return <Typography as="i" {...props}/>
}

export const BlockQuote = (props) => {
  return <Typography weight="extrabold" {...props}/>
}

export const Striked = styled(Typography)`
  text-decoration: line-through;
`

export const Pre = (props) => {
  return <Typography as="pre" {...props} />
}

export const Code = (props) => {
  return <Typography as="code" {...props} />
}

export const InlineCode = (props) => {
  return <Typography as="span" {...props} />
}
