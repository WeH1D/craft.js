import React, { useEffect, useState } from 'react';

import { ListSettings } from './ListSettings';
import List from '@material-ui/core/List';

import { Resizer } from '../Resizer';
import { ResponsiveContainer } from '../ResponsiveContainer/ResponsiveContainer';


export type ListProps = {
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
  orientation: string;
};

const defaultProps = {
  flexDirection: 'row',
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
  height: 'auto',
  orientation: "flex-column"
};

export const ListUI = (props: Partial<ListProps>) => {
  props = {
    ...defaultProps,
    ...props,
  };
  const {
    flexDirection,
    alignItems,
    justifyContent,
    fillSpace,
    background,
    color,
    padding,
    margin,
    shadow,
    radius,
    children,
    orientation
  } = props;

  return (
    <Resizer
      propKey={{ width: 'width', height: 'height'}}
        className = {"d-flex " + orientation}
      style={{
        background: `rgba(${Object.values(background)})`,
        color: `rgba(${Object.values(color)})`,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        boxShadow:
          shadow === 0
            ? 'none'
            : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
        borderRadius: `${radius}px`,
        flex: fillSpace === 'yes' ? 1 : 'unset',
        overflow: "auto",
      }}
    >
        {children}  
    </Resizer>
  );
};

ListUI.craft = {
  displayName: 'List',
  props: defaultProps,
  rules: {
    canDrag: () => true,
    canMoveIn: (incomingNode) => incomingNode.data.type != ResponsiveContainer
  },
  related: {
    toolbar: ListSettings,
  },
};
