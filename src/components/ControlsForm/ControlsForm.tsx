import { Dispatch, SetStateAction, useState } from "react"
import Tooltip from '../UI/Tooltip/Tooltip'
import Input from "../UI/Input/Input"
import Select from "../UI/Select/Select"
import cl from "./ControlsForm.module.scss"


interface IControlsFormProps {
    newState: number[]
    handleInputChange: (screenIndex: number, inputIndex: number, value: number[]) => void
    handleSelectChange?: (screenIndex: number, value: number[] | string) => void
    screenIndex: number
    options: TOption[]
    showMainInput: boolean
    showTooltip?: boolean
    tooltipText?: string
    formDescription?: string
}

const ControlsForm = ({ newState, handleInputChange, handleSelectChange, screenIndex, options, showMainInput, showTooltip, tooltipText = '', formDescription }: IControlsFormProps) => {
    const [isCustomAspect, setIsCustomAspect] = useState(false);
    const [tmpState, setTmpState] = useState(newState);


    const handleInput = (inputIndex: number, value: number) => {


        const newState = [...tmpState]
        newState[inputIndex] = value
        handleInputChange(screenIndex, inputIndex, newState)
        setTmpState(newState)
    };

    const handleSelect = (value: number[] | string) => {
        handleSelectChange?.(screenIndex, value)
    };

    return (
        <div className={cl.form}>
            {
                !showMainInput &&
                <div className={cl.form__descr}>
                    {formDescription}
                </div>
            }
            <Input
                isVisible={showMainInput}
                placeholder="Размер"
                handleChange={handleInput}
                idx={0}
                initialValue={`${newState[0]}`}
            />
            <Select
                setIsCustom={setIsCustomAspect}
                handleSelect={handleSelect}
                options={options}
            />
            {
                tooltipText.length
                ? isCustomAspect &&
                    <Tooltip content={tooltipText} delay={250}>?</Tooltip>
                : <></>
            }
            <Input
                isVisible={isCustomAspect}
                placeholder="Ширина"
                handleChange={handleInput}
                idx={showMainInput ? 1 : 0}
            />
            <Input
                isVisible={isCustomAspect}
                placeholder="Высота"
                handleChange={handleInput}
                idx={showMainInput ? 2 : 1}
                cross
            />
        </div>
    );
};

export default ControlsForm;
