import React, { Children } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Element, useNode } from '@craftjs/core';
import { Container } from '../Container';
import { Resizer } from '../Resizer';

import { TabPannelSettings } from './TabPannelSettings';
import { green, lightBlue, yellow } from '@material-ui/core/colors';
import { colors } from '@material-ui/core';


function TabPanel2({ value, index, children }) {
  console.log("Value : " + value + " index: " + index)
  console.log("jesu li jednaki: ", value === index)
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    // {...other}
    >
      {value === index && (
        // <Box p={3}>
        //   <Typography>{children}</Typography>
        // </Box>
        <div>
          {children}
        </div>

      )}

    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
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
  tabs: Array<JSX.Element>;
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
  tabs: []
};

//var tabs = [];
export default function TabPannel(props: Partial<TabPannelProps>) {

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
    tabs
  } = props;


  function createTabs() {
    //var tabs = [];

    console.log("usao u f-ju create tabs, br panela u listi: ", tabs.length)

    var numOfChildrens = 0
    if (props != null) {
      console.log(props.children)
      var obj = props.children
      console.log("OBj ", obj)
      if (obj != null) {
        var pr = obj["props"]
        var ch = pr["children"]
        numOfChildrens = ch.length
      }
    }


    //for(var i = 0; i< numOfChildrens; i ++ ){
    if (numOfChildrens > 0) {
      console.log("jesu li jednaki: ", value === numOfChildrens - 1)

      props.tabs = [...props.tabs,
      <TabPanel2 value={value} index={numOfChildrens - 1} key={numOfChildrens.toString()}>
        <Element
          id={"tab_pannel_" + { numOfChildrens }}
          canvas
          is={Container}
          background={{ r: 50, g: 50, b: 50, a: 1 }}
          color={{ r: 0, g: 0, b: 0, a: 1 }}
          height="150px"
          width="150px"
        ></Element>

      </TabPanel2>]


    }

    //}

    console.log("Broj tab panela: ", tabs.length)
    console.log(tabs)
    return tabs;
  }

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { connectors: { connect, drag }, actions: { setProp } } = useNode();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log("usao na promjenu, broj: ", newValue)
    setValue(newValue);
  };

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
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            {/* <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} /> */}
            {children}
          </Tabs>
        </AppBar>
        {createTabs()}
      </div>




    </Resizer>

  );
}

TabPannel.craft = {
  displayName: 'Tab Pannel',
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: TabPannelSettings,
  },
};
