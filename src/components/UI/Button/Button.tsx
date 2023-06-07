import React from 'react';
import cl from "./Button.module.scss"

interface IButtonProps {
    children: React.ReactNode
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children, handleClick }: IButtonProps) =>
    <button className={cl.button} onClick={(e) => handleClick(e)}>
        {children}
    </button>

export default Button
