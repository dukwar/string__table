import React from "react";
import classNames from "classnames";

interface Props {
    className: string,
    onClick?: () => void,
    children: React.ReactNode
}

function Button({className, onClick, children}: Props) {

    const classes = classNames(
        'button',
        className
    )

    return (
        <>
            <button
                className={classes}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    );
}

export default Button