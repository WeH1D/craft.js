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


function TabPanel2({ value, index, type = "tab", children }) {
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

var numOfChildrens = 0
var tabs = [];

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


export const tabPannelContext = React.createContext({})
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
  } = props;


  function createTabs() {
    //var tabs = [];

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


    //for(var i = 0; i< numOfChildrens; i ++ ){
    if (numOfChildrens > 0 && tempNumOfChildrens - tabs.length == 1) {
      console.log("DODAO SAM TAB PANNEL: ", numOfChildrens-1)
      tabs = [...tabs, <TabPanel2 value={value} index={numOfChildrens-1} key={numOfChildrens.toString()}>
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



    console.log(tabs)
    return tabs;
  }

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { connectors: { connect, drag }, actions: { setProp } } = useNode();

  var context = {
    handleChange: (a) => handleChange(a),
    numOfChildrens: numOfChildrens
  }


  const handleChange = (newValue: number) => {
    console.log("Usao sam za broj: ",newValue)
    setValue(newValue);
  };

  context["handleChange"] = (a) => handleChange(a)
  context["numOfChildrens"] = numOfChildrens

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
              {/* <Tab label="Item One" {...a11yProps(0)} value = {0} onClick={()=>handleChange(0)}/>
            <Tab label="Item Two" {...a11yProps(1)} value = {1} onClick={()=>handleChange(1)}/>
            <Tab label="Item Three" {...a11yProps(2)} value = {2} onClick={()=>handleChange(2)}/> */}
              {children}
            </tabPannelContext.Provider>
          </Tabs>
        </AppBar>
        {createTabs()}

        {/* <TabPanel2 value={value} index={0}>
        <Element
          id="tab_pannel_1"
          canvas
          is={Container}
          background={{ r: 50, g: 50, b: 50, a: 1 }}
          color={{ r: 0, g: 0, b: 0, a: 1 }}
          height="150px"
          width="150px"
        ></Element>

      </TabPanel2>

      <TabPanel2 value={value} index={1} >
        <Element
          id="tab_pannel_2"
          canvas
          is={Container}
          background={{ r: 130, g: 70, b: 90, a: 1 }}
          color={{ r: 0, g: 0, b: 0, a: 1 }}
          height="150px"
          width="150px"
        ></Element>

      </TabPanel2>
      <TabPanel2 value={value} index={2} >
        <Element
          id="tab_pannel_3"
          canvas
          is={Container}
          background={{ r: 79, g: 145, b: 23, a: 1 }}
          color={{ r: 0, g: 0, b: 0, a: 1 }}
          height="150px"
          width="150px"
        ></Element>

      </TabPanel2>

      <TabPanel2 value={value} index={3} >
        <Element
          id="tab_pannel_4"
          canvas
          is={Container}
          background={{ r: 5, g: 200, b: 78, a: 1 }}
          color={{ r: 0, g: 0, b: 0, a: 1 }}
          height="150px"
          width="150px"
        ></Element>

      </TabPanel2> */}
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
