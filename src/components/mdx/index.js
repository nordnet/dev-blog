import Head from 'next/head'
import Image from 'next/image';
// import dynamic from 'next/dynamic'

import {Separator} from '@nordnet/ui';

import {P, H1, H2, H3, H4, H5, H6, Em, BlockQuote, Strong, Striked, Pre, Code, InlineCode} from './Typography';

import Link from './Link'
import { Item, OrderedList, UnorderedList } from './List';
import { Table, TFooter, THead, TBody, TR, TD, TH } from './Table';

export const components = {
  a: Link,
  p: P,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  blockquote: BlockQuote,
  ul: UnorderedList,
  ol: OrderedList,
  li: Item,
  table: Table,
  thead: THead,
  tbody: TBody,
  tfooter: TFooter,
  tr: TR,
  td: TD,
  th: TH,
  code: Code,
  inlineCode: InlineCode,
  pre: Pre,
  em: Em,
  strong: Strong,
  del: Striked,
  hr: Separator,
  img: Image,
  Head,
  // TestComponent: dynamic(() => import('../../components/TestComponent')),
}

export default components;