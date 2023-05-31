import React from 'react';
import cl from "./Input.module.scss"

const validateInput = (event) => {
    if (
        !/^[0-9]*\.?[0-9]*$/.test(event.key)
        && event.key !== 'Backspace' && event.key !== 'Delete'
        && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight'
        && event.key !== 'ArrowUp'   && event.key !== 'ArrowDown'
    ) {
        event.preventDefault();
    }
}

const Input = ({ isVisible, placeholder, cross }) => {
    return (
        <div className={isVisible ?  cl.wrapper : cl.wrapper_hidden} >
            <input
                type="text"
                placeholder={placeholder}
                className={cl.input}
                onKeyDown={(e) => validateInput(e)}
                maxLength="5"
            />
            {cross && <div className={isVisible ? cl.hasCross : ''} />}
        </div>
    )
};

export default Input;
