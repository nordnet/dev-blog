import { MDXRemote } from 'next-mdx-remote'
import {components } from './mdx';

export const MDXMapper = (props) => {
  return <MDXRemote {...props} components={components} />
}

export default MDXMapper;