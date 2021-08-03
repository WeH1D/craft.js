import React from 'react';

import { ResponsiveContainerSettings } from './ResponsiveContainerSettings';
import { useNode } from "@craftjs/core";
import 'bootstrap/dist/css/bootstrap-grid.css';

export type ResponsiveContainerProps = {
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
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    rowOrCol: string;
};

const defaultProps = {
    padding: ['0', '1', '0', '1'],
    margin: ['0', '0', '0', '0'],
    background: { r: 230, g: 230, b: 230, a: 1 },
    color: { r: 0, g: 0, b: 0, a: 1 },
    shadow: 0,
    radius: 0,
    xs: 0,
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0,
    rowOrCol: "row",
};

export const ResponsiveContainer = (props: Partial<ResponsiveContainerProps>) => {
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
        xs, sm, md, lg, xl,
        rowOrCol
    } = props;

    var responsiveClasses = ""
    // responsiveClasses += rowOrCol + " "
    // if (rowOrCol == "col") {
        if (xs != 0) responsiveClasses += "col-" + xs + " "
        if (sm != 0) responsiveClasses += "col-sm-" + sm + " "
        if (md != 0) responsiveClasses += "col-md-" + md + " "
        if (lg != 0) responsiveClasses += "col-lg-" + lg + " "
        if (xl != 0) responsiveClasses += "col-xl-" + xl + " "
    //}

    const { connectors: { connect, drag } } = useNode();

    return (
        <div className={"col " + responsiveClasses}
            ref={ref => connect(drag(ref))}
            style={{
                height: "auto", minHeight: "50px",
                background: `rgba(${Object.values(background)})`,
                color: `rgba(${Object.values(color)})`,
                padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
                margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
                boxShadow:
                    shadow === 0
                        ? 'none'
                        : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
                borderRadius: `${radius}px`,
            }}>
            {children}
        </div>
    );
};

ResponsiveContainer.craft = {
    displayName: 'ResponsiveContainer',
    props: defaultProps,
    rules: {
        canDrag: () => true,
    },
    related: {
        toolbar: ResponsiveContainerSettings,
    },
};
