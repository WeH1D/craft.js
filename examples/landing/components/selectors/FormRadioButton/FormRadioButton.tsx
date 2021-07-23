import React from 'react'
import { useNode } from '@craftjs/core'
import { useContext } from 'react'
import { MyContext } from '../Form/Form'
import { FormRadioButtonSettings } from './FormRadioButtonSettings'
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export type FormRadioButtonProps = {
    label: string;
    value: string;
};

const defaultProps = {
    label: "Label",
    value: "value"
};

export const FormRadioButton = (props: Partial<FormRadioButtonProps>) => {

    props = {
        ...defaultProps,
        ...props,
    };
    const {
        label,
        value,
    } = props;

    const { connectors: { connect, drag } } = useNode();
    var context = useContext(MyContext)

    return (
        <div ref={ref => connect(drag(ref))}>
            <FormControlLabel value={value} control={<Radio />} label={label} />
        </div>

    )
}

FormRadioButton.craft = {
    displayName: 'Radio button',
    rules: {
        canDrag: () => true,
    },
    props: defaultProps,
    related: {
        toolbar: FormRadioButtonSettings,
    },
};