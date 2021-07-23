import React from 'react'
import { useNode } from '@craftjs/core'
import { useContext } from 'react'
import { MyContext } from '../Form/Form'
import { FormCheckboxSettings } from './FormCheckboxSettings'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

export type FormCheckboxProps = {
    label: string;
    fieldName: string;
    checked: boolean;
};

const defaultProps = {
    label: "Label",
    fieldName: "checkbox",
};

export const FormCheckbox = (props: Partial<FormCheckboxProps>) => {

    props = {
        ...defaultProps,
        ...props,
    };
    const {
        label,
        fieldName,
    } = props;

    const { connectors: { connect, drag } } = useNode();
    var context = useContext(MyContext)

    return (
        <div ref={ref => connect(drag(ref))}>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={context.values["fieldName"]}
                        onChange={e => {
                            console.log("Ime " + fieldName)
                            context.values = {
                                ...context.values,
                                [fieldName]: e.target.checked
                            }
                        }}
                        name={fieldName}
                        color="primary"
                    />
                }
                label={label}
            />
        </div>

    )
}

FormCheckbox.craft = {
    displayName: 'Checkbox',
    rules: {
        canDrag: () => true,
    },
    props: defaultProps,
    related: {
        toolbar: FormCheckboxSettings,
    },
};