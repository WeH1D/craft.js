import React from 'react'
import { useNode } from '@craftjs/core'
import { useContext } from 'react'
import { MyContext } from '../Form/Form'
import { FormSliderSettings } from './FormSliderSettings'
import Slider from '@material-ui/core/Slider';

export type FormSliderProps = {
    minValue: number;
    maxValue: number;
    stepSize: number;
    fieldName: string;
};

const defaultProps = {
    minValue: 0,
    maxValue: 100,
    stepSize: 1,
    fieldName: "slider"
};

export const FormSlider = (props: Partial<FormSliderProps>) => {

    props = {
        ...defaultProps,
        ...props,
    };
    const {
        minValue,
        maxValue,
        stepSize,
        fieldName
    } = props;

    const { connectors: { connect, drag } } = useNode();
    var context = useContext(MyContext)

    function valuetext(value) {
        console.log("Vrijednost iz slidera: " + value)
        context.values = {
            ...context.values,
            [fieldName] : value
        }
        return value;
    }

    return (
        <div ref={ref => connect(drag(ref))}>
            <Slider
                defaultValue={0}
                step={stepSize}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                marks
                min={minValue}
                max={maxValue}
            />
        </div>

    )
}

FormSlider.craft = {
    displayName: 'Slider',
    rules: {
        canDrag: () => true,
    },
    props: defaultProps,
    related: {
        toolbar: FormSliderSettings,
    },
};