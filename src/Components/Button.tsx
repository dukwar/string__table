import React from "react";
import classNames from "classnames";

interface Props {
    className: string,
    onClick?: () => void,
    disabled?: boolean,
    children: React.ReactNode
}

function Button({className, onClick, disabled, children}: Props) {

    const classes = classNames(
        'button',
        className
    )

    return (
        <>
            <button
                className={classes}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        </>
    );
}

export default Button