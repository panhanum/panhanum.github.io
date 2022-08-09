import React from 'react';
import '../../assets/css/border-animation.css';

const BorderBoxAnimation = (props: any) => {
    const {
        children,
        width,
        height,
        className
    } = props;
    return (
        <div className={"box " + className} style={{ width, height }}>
            <div className='box-content'>
                {children}
            </div>
        </div>
    )
}

export default BorderBoxAnimation;