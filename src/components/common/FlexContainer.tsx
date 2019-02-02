import React, { CSSProperties } from 'react';
import { styleSheet } from '../../styles/Stylesheet';

import {
    TFlexAlignContent,
    TFlexAlignItems,
    TFlexDirection,
    TFlexJustification,
    TFlexWrap
} from '../../styles/FlexStyles';

export interface IFlexContainerProps {
    alignment?: TFlexAlignItems,
    children: React.ReactNode,
    column?: boolean,
    contentAlignment?: TFlexAlignContent,
    direction?: TFlexDirection,
    itemAlignment?: TFlexAlignItems,
    justification?: TFlexJustification,
    style?: CSSProperties,
    wrap?: TFlexWrap,
}

export default function FlexContainer(props: IFlexContainerProps) {
    let direction = (!!props.direction) ? props.direction : "row";

    if (!!props.column)
        direction = "column";

    let style = {
        display: "flex",
        flexDirection: direction,
        justifyContent: props.justification,
        alignItems: props.itemAlignment || props.alignment,
        alignContent: props.contentAlignment,
        flexWrap: props.wrap,
    };

    let cssStyle = styleSheet(Object.assign({}, props.style || {}, style));

    return <div style={cssStyle}>{props.children}</div>;
};
