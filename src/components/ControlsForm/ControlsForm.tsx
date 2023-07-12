import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import Tooltip from "../UI/Tooltip/Tooltip"
import Input from "../UI/Input/Input"
import Select from "../UI/Select/Select"
import calculateDrawers from "../../utils/calculateDrawers"
import calculateSizes from "../../utils/calculateSizes"
import cl from "./ControlsForm.module.scss"


interface IControlsFormProps {
    title: string
    newState: number[]
    handleInputChange: (screenIndex: number, inputIndex: number, value: number[]) => void
    handleSelectChange: (screenIndex: number, value: number[] | string) => void
    screenIndex: number
    options: TOption[]
    showMainInput: boolean
    tooltipText?: string
    formDescription?: string
}

const ControlsForm = ({
    title,
    newState,
    handleInputChange,
    handleSelectChange,
    screenIndex,
    options,
    showMainInput,
    tooltipText = '',
    formDescription
}: IControlsFormProps) => {
    const firstScreenState = useAppSelector(state => state.screens.firstScreen)
    const secondScreenState = useAppSelector(state => state.screens.secondScreen)

    const [isCustomAspect, setIsCustomAspect] = useState(false)
    const [tmpState, setTmpState] = useState(newState)

    const [width1, height1, width2, height2] = calculateSizes(firstScreenState, secondScreenState)
    const [screenInFront] = calculateDrawers(width1, height1, width2, height2)

    useEffect(() => {
        if (screenIndex === 0) {
            setTmpState(firstScreenState)
        }
        if (screenIndex === 1) {
            setTmpState(secondScreenState)
        }
    }, [firstScreenState, secondScreenState])

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
        <>
            <h2 className={cl.form__title}>
                {title}
                <i className={`${cl.form__dot} ${screenInFront === screenIndex ? cl.form__dot_purple : ""}`} />
            </h2>
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
        </>
    );
};

export default ControlsForm;
