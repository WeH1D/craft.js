import React from 'react'
import { useNode } from '@craftjs/core'
import { useContext, useEffect, useState } from 'react'
import { formContext } from '../Form/Form'
import { FormTextInputSettings } from './FormTextInputSettings'
import { TextField } from '@material-ui/core'
import { globalContext } from 'utils/Context/context'

export type FormTextInputProps = {
  fieldName: string;
  fieldType: string;
  fieldLabel: string;
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
  contextName: string;
};

const defaultProps = {
  fieldName: '',
  fieldType: 'text',
  fieldLabel: '',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  fillSpace: 'no',
  padding: ['0', '0', '0', '0'],
  margin: ['0', '0', '0', '0'],
  background: { r: 220, g: 220, b: 220, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  width: '100',
  height: 'auto',
  contextName: 'abc'
};

export const FormTextInput = (props: Partial<FormTextInputProps>) => {

  props = {
    ...defaultProps,
    ...props,
  };
  var {
    fieldName,
    fieldType,
    fieldLabel,
    alignItems,
    justifyContent,
    fillSpace,
    background,
    color,
    padding,
    margin,
    shadow,
    radius,
    width,
    height,
    contextName
  } = props;

  const { connectors: { connect, drag }, actions: { setProp } } = useNode();
  var context = useContext(formContext)
  const Gcontext = useContext(globalContext)

  setProp(props => {
    props.contextName = context["contextName"];
  })

  function getDefaultValue(){
    if (Gcontext[context["contextName"]] != null) {
      var map = Gcontext[context["contextName"]].values
      console.log("map", map)
      if(map != null){
      console.log("fieldName", fieldName)
      if (fieldName in map){
      console.log("map[fieldName]", map[fieldName])
        return map[fieldName]
      }
      else
        return ""
      }
    }
  }

  return (
    <TextField
      ref={ref => connect(drag(ref))}
      defaultValue = {getDefaultValue()}
      style={{
        justifyContent,
        alignItems,
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
        width: `${width}%`,
        height: `${height}%`,
      }}
      fullWidth
      variant="outlined"
      label={fieldLabel}
      type={fieldType}
      onChange={a => {
        if (Gcontext[context["contextName"]] != null) {
          Gcontext[context["contextName"]].values = {
            ...Gcontext[context["contextName"]].values,
            [fieldName]: a.target.value
          }
        }
      }}
    />
  )
}

FormTextInput.craft = {
  displayName: 'Form text input',
  rules: {
    canDrag: () => true,
  },
  props: defaultProps,
  related: {
    toolbar: FormTextInputSettings
  },
};
