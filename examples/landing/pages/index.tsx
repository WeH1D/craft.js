import { Editor, Frame, Element } from '@craftjs/core';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { NextSeo } from 'next-seo';
import React from 'react';
import {globalContext} from 'utils/Context/context'
import { useContext } from 'react';


import { Viewport, RenderNode } from '../components/editor';
import { Container, Text } from '../components/selectors';
import { Button } from '../components/selectors/Button';
import { Custom1, OnlyButtons } from '../components/selectors/Custom1';
import { Custom2, Custom2VideoDrop } from '../components/selectors/Custom2';
import { Custom3, Custom3BtnDrop } from '../components/selectors/Custom3';
import { Video } from '../components/selectors/Video';
import  {Form}  from '../components/selectors/Form/Form';
import  List  from '../components/selectors/List/List';
import {FormTextInput} from '../components/selectors/FormTextInput/FormTextInput';
import { FloatingActionButton } from 'components/selectors/FloatingActionButton/FloatingActionButton';
import  TabGroup  from 'components/selectors/TabPannel/TabGroup';
import { TabUI } from 'components/selectors/Tab/TabUI';
import { ResponsiveContainer } from 'components/selectors/ResponsiveContainer/ResponsiveContainer';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'acumin-pro',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function App() {

  const context = useContext(globalContext)

    context["registration"] = {
    values: {},
    submit: (a) => {submit(a)},
    register: (a) => {register(a)},
    }

  context["login"] = {
    values: {},
    login: (a) => {login(a)},
  }

  context["DataGrid"] = {
    init: (a) => {return initDataGrid(a)},
  }

  context["TabGroup"] = {
    tabs : []
  }

  context["List"] = {
    init : (a) => {return initList(a)},
    children: [],
    parent: {}
  }


  return (
    <ThemeProvider theme={theme}>
      <div className="h-full h-screen">
        <NextSeo
          title="Craft.js"
          description="A React framework for building drag-n-drop page editors."
          canonical="https://craft.js.org/"
          twitter={{
            site: 'craft.js.org',
            cardType: 'summary_large_image',
          }}
        />
        <Editor
          resolver={{
            Container,
            Text,
            Custom1,
            Custom2,
            Custom2VideoDrop,
            Custom3,
            Custom3BtnDrop,
            OnlyButtons,
            Button,
            Video,
            Form,
            FormTextInput,
            FloatingActionButton,
            TabGroup,
            TabUI,
            List
          }}
          enabled={false}
          onRender={RenderNode}
        >
          <Viewport>
            <Frame>
              <Element
                canvas
                is={Container}
                width="90%"
                height="500px"
                background={{ r: 255, g: 255, b: 255, a: 1 }}
                padding={['40', '40', '40', '40']}
                custom={{ displayName: 'App' }}
              ></Element>
            </Frame>
          </Viewport>
        </Editor>
      </div>
    </ThemeProvider>
  );

  function register(a){
    alert("registrovano!!" + JSON.stringify(context["registration"].values))
  }
  
  function submit(a){
    alert("submitano!!" + JSON.stringify(context["registration"].values))
  }
  
  function login(a){
    alert("logovano!!" + JSON.stringify(context["login"].values))
  }

  function initDataGrid(a){
    var rows = [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    return rows
  }

  function initList(a){
    var data = [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      { id: 6, lastName: 'Melisandre', firstName: "abc", age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    return data
  }

}

export default App;
