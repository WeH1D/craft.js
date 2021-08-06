import React, { Children, useContext, useEffect, useState } from 'react';
import { Element, useEditor, useNode } from '@craftjs/core';
import { Container } from '../Container';


import { ListSettings } from './ListSettings';
import { globalContext } from 'utils/Context/context'
import { ResponsiveContainer } from '../ResponsiveContainer/ResponsiveContainer';
import  ListItem  from '../ListItem/ListItem';
import  {Text}  from '../Text/index';

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
  initFunction: any;
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
  initFunction: ""
};

var listItems = []

export default function List(props: Partial<ListProps>) {

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
    initFunction
  } = props;



  const Gcontext = useContext(globalContext)
  const [showDefaultListItem, setshowDefaultListItem] = useState(true)

  function mapData(dataItem, children){
    var childrenList = []

      for(var i = 0; i< children.length; i++){
        var currentChild = children[i]
        if(currentChild["mapFrom"] in dataItem)
        {
          var value = dataItem[currentChild["mapFrom"]]
          if(currentChild["type"] == "text")
          {
            childrenList.push(<Text key={"child-" + i} {...currentChild} text={value}></Text>)
          }
        }
      }
      return childrenList
  }

  useEffect(() => {
    var map = Gcontext["List"]
    if(initFunction != "")
    {
      if(initFunction in map){
        var data = map[`${initFunction}`]()
        
        listItems = data.map((dataItem, i)=> {
          return (
            <ListItem key={"dataItem-" + i} {...Gcontext["List"].parent}>
              {mapData(dataItem, Gcontext["List"].children)}
            </ListItem>
          )
        })
        setshowDefaultListItem(false)
      }
    }

  }, [initFunction])

  return (
    <ResponsiveContainer rowOrCol="row">
      {showDefaultListItem ? children : listItems}
    </ResponsiveContainer>

  );
}

List.craft = {
  displayName: 'List',
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ListSettings,
  },
};
