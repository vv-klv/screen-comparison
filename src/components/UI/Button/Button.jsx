import React from 'react';
import cl from "./Button.module.scss"

const Button = ({children}) => {
    const handleClick = {

    }

    return (
        <button
            className={cl.button}
            onClick={() => handleClick()}
        >
           {children}
        </button>)
};

export default Button;
