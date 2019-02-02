import * as React from 'react';

interface IStylesMap {
    [styleName: string]: React.CSSProperties
}

export function styleSheet(style: React.CSSProperties) {
    return style;
}

export function namedStyleSheet<T extends IStylesMap>(style: T) {
    return style;
}
