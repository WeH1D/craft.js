import React, { Children, useContext, useEffect, useState } from 'react';
import { useEditor, useNode } from '@craftjs/core';
import { Container } from '../Container';

import { ListItemSettings } from './ListItemSettings';
import { globalContext } from 'utils/Context/context'
import { ResponsiveContainer } from '../ResponsiveContainer/ResponsiveContainer';
import { Height } from '@material-ui/icons';

export type ListItemProps = {
  background: Record<'r' | 'g' | 'b' | 'a', number>;
  color: Record<'r' | 'g' | 'b' | 'a', number>;
  flexDirection: string;
  alignItems: string;
  justifyContent: string;
  fillSpace: string;
  width: string;
  height: string;
  padding: string[];
  margin: string[];
  marginTop: number;
  marginLeft: number;
  marginBottom: number;
  marginRight: number;
  shadow: number;
  children: React.ReactNode;
  radius: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  rowOrCol: string;
};

const defaultProps = {
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  fillSpace: 'no',
  padding: ['0', '0', '0', '0'],
  margin: ['0', '0', '0', '0'],
  background: { r: 255, g: 255, b: 255, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  width: '100%',
  height: '300px',
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
  rowOrCol: "row",
};

var parentProps = {};

export default function ListItem(props: Partial<ListItemProps>) {

  props = {
    ...defaultProps,
    ...props,
  };
  var {
    flexDirection,
    alignItems,
    justifyContent,
    fillSpace,
    background,
    color,
    height,
    padding,
    margin,
    shadow,
    radius,
    children,
    xs, sm, md, lg, xl,
    rowOrCol
  } = props;

  const Gcontext = useContext(globalContext)

  useEffect(() => {
  Gcontext["List"].children = propsOfChildren
  Gcontext["List"].parent = parentProps
  })


  const {
    connectors: { connect, drag },
    id,
    actions :{setProp}
  } = useNode();

  const { propsOfChildren } = useEditor((state, query) => {
    const descendants = query.node(id).descendants();
    parentProps = query.node(id).get().data.props

    return {
      propsOfChildren: descendants.map((id) => query.node(id).get().data.props)
    };
  });

  return (
    <ResponsiveContainer 
        rowOrCol="col" 
        xs={xs} md={md} sm={sm} lg={lg} xl={xl} 
        background={background}
        height= {height}
        {...props}
        >
      {children}
    </ResponsiveContainer>

  );
}

ListItem.craft = {
  displayName: 'List Item',
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ListItemSettings,
  },
};
