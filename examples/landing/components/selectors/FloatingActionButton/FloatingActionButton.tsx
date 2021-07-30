import React from 'react'
import { useNode } from '@craftjs/core'
import { Fab } from '@material-ui/core';
import { FloatingActionButtonSettings } from './FloatingActionButtonSettings';
import { formContext } from '../Form/Form';
import { useContext } from 'react';
import {globalContext} from 'utils/Context/context'

export type FloatingActionButtonProps = {
    onClick: string;
};

const defaultProps = {
    onClick: '',
};

export const FloatingActionButton = (props: Partial<FloatingActionButtonProps>) => {

    props = {
        ...defaultProps,
        ...props,
    };
    const {
        onClick,
    } = props;

    const { connectors: { connect , drag} } = useNode();

    var context = useContext(formContext)
    const Gcontext = useContext(globalContext)

    return (
        <Fab color="primary" aria-label="add" 
            ref={ref => connect(drag(ref))}
            onClick={ a => {
                if(Gcontext[context["contextName"]] != null){
                    var funkcija = Gcontext[context["contextName"]];
                    if(onClick != "")
                        funkcija[`${onClick}`]()}
                }
            }>
        </Fab>
    )
}

FloatingActionButton.craft = {
    displayName: 'Floating action button',
    rules: {
        canDrag: () => true,
    },
    props: defaultProps,
    related: {
        toolbar: FloatingActionButtonSettings,
    },
};
