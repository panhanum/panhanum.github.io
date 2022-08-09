import React from 'react';
import colorHelper from '../../utils/color-helper';

const Button = (props: any) => {
    const {
        children,
        borderRadius = 10,
        paddingBlock = 10,
        paddingInline = 40,
        secondary,
        primary,
        onClick
    } = props;
    let backgroundColor = "#ffffff";

    if (secondary) backgroundColor = colorHelper.secondary;
    if (primary) backgroundColor = colorHelper.primary;
    return (
        <button onClick={onClick} className="button fw-bold" style={{ paddingBlock, paddingInline, backgroundColor, borderRadius }}>
            {children}
        </button>
    )
}

export default Button;