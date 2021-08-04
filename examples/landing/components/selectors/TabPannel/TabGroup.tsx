import React, { Children, useContext } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Element, useNode } from '@craftjs/core';
import { Container } from '../Container';
import { Resizer } from '../Resizer';

import { TabGroupSettings } from './TabGroupSettings';
import { green, lightBlue, yellow } from '@material-ui/core/colors';
import { colors } from '@material-ui/core';
import { globalContext } from 'utils/Context/context'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value != index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value == index && (
         <Element
         id={"tab_pannel_" +  index }
         canvas
         is={Container}
         background={{ r: Math.floor(Math.random() * 150) + 1, g: Math.floor(Math.random() * 150) + 1, b: Math.floor(Math.random() * 150) + 1, a: 1 }}
         color={{ r: 0, g: 0, b: 0, a: 1 }}
         height="100px"
         width="100%"
       >
        {children}
      </Element>
      )}
    </div>
  );
}




const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export type TabPannelProps = {
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
};

var numOfChildrens = 0
// var tabs = [];

export const tabPannelContext = React.createContext({})

export default function TabGroup(props: Partial<TabPannelProps>) {

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
    padding,
    margin,
    shadow,
    radius,
    children,
  } = props;


  function createTabs() {

    var tempNumOfChildrens = 0;
    if (props != null) {
      var obj = props.children
      if (obj != null) {
        var pr = obj["props"]
        var ch = pr["children"]
        numOfChildrens = ch.length
        tempNumOfChildrens = numOfChildrens;
      }
    }
    if (numOfChildrens > 0 && tempNumOfChildrens - Gcontext["TabGroup"].tabs.length == 1) {
      Gcontext["TabGroup"].tabs = [...Gcontext["TabGroup"].tabs, 
        <TabPanel value={value} index={numOfChildrens-1} key={numOfChildrens.toString()} ></TabPanel>
      ]
    }
    return Gcontext["TabGroup"].tabs;
  }

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { connectors: { connect, drag }, actions: { setProp } } = useNode();
  const Gcontext = useContext(globalContext)

  var context = {
    handleChange: (a) => handleChange(a),
  }

  const handleChange = (newValue: number) => {
    console.log("Usao sam za broj: ",newValue)
    setValue(newValue);
    var updatedTabs = []
    for(var i = 0; i < Gcontext["TabGroup"].tabs.length; i++){
      updatedTabs[i] = <TabPanel value={newValue} index={Gcontext["TabGroup"].tabs[i].props.index} key={Gcontext["TabGroup"].tabs[i].key}>{Gcontext["TabGroup"].tabs[i].children}</TabPanel>
    }
    Gcontext["TabGroup"].tabs = []
    Gcontext["TabGroup"].tabs = updatedTabs
  };

  context["handleChange"] = (a) => handleChange(a)

  return (
    <Resizer
      propKey={{ width: 'width', height: 'height' }}
      style={{
        justifyContent,
        alignItems,
        flexDirection: flexDirection,
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
      }}
    >
      <div style={{ height: "50px", width: "100%" }}>
        <AppBar position="static">
          <Tabs value={value} aria-label="simple tabs example">
            <tabPannelContext.Provider value={context}>
              {children}
            </tabPannelContext.Provider>
          </Tabs>
        </AppBar>
          {createTabs()}
      </div>
    </Resizer>

  );
}

TabGroup.craft = {
  displayName: 'Tab Pannel',
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: TabGroupSettings,
  },
};
