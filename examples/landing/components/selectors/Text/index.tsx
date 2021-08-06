import { useNode, useEditor } from '@craftjs/core';
import React from 'react';
import ContentEditable from 'react-contenteditable';

import { TextSettings } from './TextSettings';

export type TextProps = {
  fontSize: string;
  textAlign: string;
  fontWeight: string;
  color: Record<'r' | 'g' | 'b' | 'a', string>;
  shadow: number;
  text: string;
  margin: [string, string, string, string];
  setFunc: any;
  mapTo: string;
  mapFrom: string;
  type: string;
};

export const Text = (props:  Partial<TextProps>) => {
  props = {
    ...props,
  };
  var {
    setFunc,
    mapTo,
    mapFrom,
    type
  } = props;
  const {
    connectors: { connect },
    setProp,
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  setFunc = (value) => {
    setProp((prop) => (prop.text = value), 500);
  }

  return (
    <ContentEditable
      innerRef={connect}
      html={props.text} // innerHTML of the editable div
      disabled={!enabled}
      onChange={(e) => {
        setProp((prop) => (prop.text = e.target.value), 500);
      }} // use true to disable editing
      tagName="h2" // Use a custom HTML tag (uses a div by default)
      style={{
        width: '100%',
        margin: `${props.margin[0]}px ${props.margin[1]}px ${props.margin[2]}px ${props.margin[3]}px`,
        color: `rgba(${Object.values(props.color)})`,
        fontSize: `${props.fontSize}px`,
        textShadow: `0px 0px 2px rgba(0,0,0,${(props.shadow || 0) / 100})`,
        fontWeight : props.fontWeight,
        textAlign : props.textAlign,
      }}
    />
  );
};

Text.craft = {
  displayName: 'Text',
  props: {
    fontSize: '15',
    textAlign: 'left',
    fontWeight: '500',
    color: { r: 92, g: 90, b: 90, a: 1 },
    margin: [0, 0, 0, 0],
    shadow: 0,
    text: 'Text',
    type: "text"
  },
  related: {
    toolbar: TextSettings,
  },
};
