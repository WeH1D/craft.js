import React from 'react';

import { ImageSettings } from './ImageSettings';
import { useNode } from "@craftjs/core";
import 'bootstrap/dist/css/bootstrap-grid.css';

export type ImageProps = {
    background: Record<'r' | 'g' | 'b' | 'a', number>;
    color: Record<'r' | 'g' | 'b' | 'a', number>;
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
    link: string;
    objectFit: any;
};

const defaultProps = {
    padding: ['0', '1', '0', '1'],
    margin: ['0', '0', '0', '0'],
    background: { r: 230, g: 230, b: 230, a: 0 },
    color: { r: 0, g: 0, b: 0, a: 1 },
    shadow: 0,
    radius: 0,
    link: "",
    width: "200",
    height: "200",
    objectFit: "fill"
};

export const Image = (props: Partial<ImageProps>) => {
    props = {
        ...defaultProps,
        ...props,
    };
    const {
        background,
        color,
        padding,
        margin,
        shadow,
        radius,
        children,
        link,
        width,
        height,
        objectFit
    } = props;


    const { connectors: { connect, drag } } = useNode();

    return (
        <img
            ref={ref => connect(drag(ref))}
            src = {link}
            style={{
                height: `${height}px`,
                width: `${width}px`,
                objectFit: objectFit,
                background: `rgba(${Object.values(background)})`,
                color: `rgba(${Object.values(color)})`,
                padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
                margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
                boxShadow:
                    shadow === 0
                        ? 'none'
                        : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
                borderRadius: `${radius}px`,
            }}
            //{children}
        ></img>
    );
};

Image.craft = {
    displayName: 'Image',
    props: defaultProps,
    rules: {
        canDrag: () => true,
    },
    related: {
        toolbar: ImageSettings,
    },
};
