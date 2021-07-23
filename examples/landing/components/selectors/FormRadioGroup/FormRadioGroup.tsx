import React from 'react'
import { useNode } from '@craftjs/core'
import { useContext } from 'react'
import { MyContext } from '../Form/Form'
import { FormRadioGroupSettings } from './FormRadioGroupSettings'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Element } from '@craftjs/core'

export type FormRadioGroupProps = {
    title: string;
    fieldName: string;
    children: React.ReactNode
};

const defaultProps = {
    title: "Title",
    fieldName: 'radio-group-value'
};

export const FormRadioGroupCanvas = (props: Partial<FormRadioGroupProps>) => {

    props = {
        ...defaultProps,
        ...props,
    };
    const {
        title,
        fieldName,
        children
    } = props;

    const { connectors: {connect}} = useNode();
    var context = useContext(MyContext)

    return (
        <div ref={connect} style = {{height: "200px",width : "200px", border: "1px solid black"}}>
        <FormControl component="fieldset">
        <FormLabel component="legend">{title}</FormLabel>
            <RadioGroup
            
                value={context.values[fieldName]}
                onChange={e => {
                    console.log("context values brefore---" + JSON.stringify(context.values, null, 2))
                    context.values = {
                        ...context.values,
                        [fieldName]: e.target.value
                    }
                }}
            >
                {children}
            </RadioGroup>
        </FormControl>
        </div>
        


    )
}

export const FormRadioGroup = () => {
    const {connectors: {connect, drag}} = useNode();
     return (
       <div ref={connect}>
         <Element id="formradiogroup" is={FormRadioGroupCanvas} canvas>
         </Element>
       </div>
     )
 }



FormRadioGroupCanvas.craft = {
    displayName: 'Radio group',
    rules: {
        canDrag: () => true,
    },
    props: defaultProps,
    related: {
        toolbar: FormRadioGroupSettings,
    },
};