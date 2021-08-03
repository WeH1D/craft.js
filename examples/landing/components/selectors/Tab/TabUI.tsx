import React from 'react';

import { TabUISettings } from './TabUISettings';

import Tab from '@material-ui/core/Tab';

import { Resizer } from '../Resizer';
import { useContext } from 'react';

import { tabPannelContext } from '../TabPannel/TabGroup';
import { createContext } from 'react';


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
  index: number;
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
  label: "default",
  index: 0
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
    label,
    index,
  } = props;

  var context = useContext(tabPannelContext)

  var func = context["handleChange"]
  // var index = context["numOfChildrens"]
  // console.log("PREVUKO TAB: ",index)


  function assignProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  return (
    <Tab label={label} {...assignProps(index)}  onClick = {() => func(index)}/>
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
