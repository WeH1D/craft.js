import React from 'react'
import { useNode } from '@craftjs/core'
import { useContext } from 'react'
import { MyContext } from '../Form/Form'
import { FormTextInputSettings } from './FormTextInputSettings'
import { TextField } from '@material-ui/core'

export type FormTextInputProps = {
  fieldName: string;
  fieldType: string;
  fieldLabel: string;
};

const defaultProps = {
  fieldName: 'default',
  fieldType: 'text',
  fieldLabel: '',
};

export const FormTextInput = (props: Partial<FormTextInputProps>) => {

  props = {
    ...defaultProps,
    ...props,
  };
  const {
    fieldName,
    fieldType,
    fieldLabel
  } = props;

  const { connectors: { connect, drag } } = useNode();
  var context = useContext(MyContext)

  return (
    <TextField
      ref={ref => connect(drag(ref))}
      variant="outlined"
      label= {fieldLabel}
      type={fieldType}
      onChange={a => {
        context.values = {
          ...context.values,
          [fieldName]: a.target.value
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