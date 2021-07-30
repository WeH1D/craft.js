import React from 'react';

import { TabUISettings } from './TabUISettings';

import Tab from '@material-ui/core/Tab';

import { Resizer } from '../Resizer';


export type TabUIProps = {
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
  isResponsive: string;
  label: string;
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
  width: 'auto',
  height: 'auto',
  label: "default"
};

export const TabUI = (props: Partial<TabUIProps>) => {
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
    label
  } = props;
  return (
    <Tab label={label}/>
  );
};

TabUI.craft = {
  displayName: 'Tab',
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: TabUISettings,
  },
};
