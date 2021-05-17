import {FlexTable} from '@nordnet/ui';
import React from 'react';

export const Table = (props) => {
  return <FlexTable {...props} />
}

export const TR = (props) => {
  return <FlexTable.Row {...props}/>
}

export const TH = (props) => {
  return <FlexTable.Header {...props}/>
}

export const TD = (props) => {
  return <FlexTable.Cell {...props} />
}

export const THead = (props) => {
  return <React.Fragment {...props} />
}

export const TBody = (props) => {
  return <React.Fragment {...props} />
}
export const TFooter = (props) => {
  return <React.Fragment {...props} />
}
