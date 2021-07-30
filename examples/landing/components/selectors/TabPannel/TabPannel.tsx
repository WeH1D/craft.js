import React, { Children } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Element } from '@craftjs/core';
import { Container } from '../Container';



export function TabPanel({value, index, children}) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      // {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
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


interface TabPanelProps {
  children?: React.ReactNode;
  width: string;
  height: string;
  background: Record<'r' | 'g' | 'b' | 'a', number>;
}

export default function SimpleTabs(props: TabPanelProps) {

  const { children,  ...other } = props;

  function createTabs(){
    var tabs = [];
  
    for(var i = 0; i< React.Children.count(props.children); i ++ ){

      tabs.push(
      <TabPanel value={value} index={0}>
        <Element
        id = "nesto"
                canvas
                is={Container}
                background={{ r: 200, g: 230, b: 230, a: 1 }}
                color={{ r: 0, g: 0, b: 0, a: 1 }}
                height="300px"
                width="100%"
        ></Element>
      </TabPanel>)
    }

    return tabs;
  }

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}
      style ={{
        background: `rgba(${Object.values(props.background)})`,
        height: "300px",
        width: "100%"
      }}
    >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {/* <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} /> */}
          {children}
        </Tabs>
        {createTabs()}
    </div>
  );
}
