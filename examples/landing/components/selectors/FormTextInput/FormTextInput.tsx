import { Element } from '@craftjs/core'
import { Container } from '@material-ui/core'
import React from 'react'
import { useNode } from '@craftjs/core'
import { Resizer } from '../Resizer'
import { Formik, useFormik } from 'formik';
import { useContext } from 'react'
import { useState } from 'react'
import { MyContext } from '../Form/Form'
import { FormTextInputSettings } from './FormTextInputSettings'

export type FormTextInputProps = {
    fieldName: string;
  };

const defaultProps = {
    fieldName: 'default'
  };

export const FormTextInput = (props: Partial<FormTextInputProps>) => {

    props = {
        ...defaultProps,
        ...props,
      };
    const {
        fieldName
      } = props;

    const {connectors: {connect, drag}} = useNode();
    var context = useContext(MyContext)

    return (   
                <input
                    ref={ref=>connect(drag(ref))}
                    style={{border:"1px solid black"}}
                    id={fieldName}
                    onChange={ a => {
                        console.log("context values brefore---" + JSON.stringify(context.values, null, 2))
                        context.values = {
                            ...context.values,
                            [fieldName] : a.target.value
                        }
                    }}
                />

    )
}

FormTextInput.craft = {
    displayName: 'CustomRed',
    rules: {
      canDrag: () => true,
    },
    props: defaultProps,
    related: {
      toolbar: FormTextInputSettings,
    },
  };