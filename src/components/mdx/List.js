import {List, ListItem} from '@nordnet/ui';

export const OrderedList = (props) => {
  return <List as="ol" {...props}/>
}

export const UnorderedList = (props) => {
  return <List as="ul" {...props}/>
}

export const Item = (props) => {
  return <ListItem {...props} />
}