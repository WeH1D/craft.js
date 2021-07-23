import React from 'react'
import { useNode } from '@craftjs/core'
import { Fab } from '@material-ui/core';
import { FloatingActionButtonSettings } from './FloatingActionButtonSettings';
import { MyContext } from '../Form/Form';
import { useContext } from 'react';

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
    var context = useContext(MyContext)

    return (
        <Fab color="primary" aria-label="add" 
            ref={ref => connect(drag(ref))}
            onClick={context[onClick]}>
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
