import { useState } from 'react';
import cl from "./Input.module.scss"

interface IInput {
    isVisible: boolean
    placeholder: string
    handleChange: (idx: number, value: number) => void
    idx: number
    cross?: boolean
}

const Input = ({ isVisible, placeholder, handleChange, idx, cross }: IInput) => {
    const [inputValue, setInputValue] = useState('')

    const validateInput = (value: string) => {
        if (/^[0-9]+\.?[0-9]*$/.test(value) || value === '') {
            setInputValue(value)
            isNaN(parseFloat(value))
                ? handleChange(idx, 1)
                : handleChange(idx, parseFloat(value))
        }
    }

    return (
        <div className={isVisible ?  cl.wrapper : cl.wrapper_hidden}>
            <input
                type="text"
                placeholder={placeholder}
                className={cl.input}
                value={inputValue}
                onChange={e => validateInput(e.target.value)}
                maxLength={5}
            />
            {cross && <div className={isVisible ? cl.hasCross : ''} />}
        </div>
    )
};



export default Input
