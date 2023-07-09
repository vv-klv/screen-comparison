import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setFirstScreenState, setSecondScreenState } from "../../store/screensSlice";
import ControlsForm from "../ControlsForm/ControlsForm";
import Button from "../UI/Button/Button";
import cl from "./Controls.module.scss";

const options: TOption[]  = [
    { value: 'custom', label: 'Своё' },
    { value: [16, 9], label: '16:9' },
    { value: [16, 10], label: '16:10' },
    { value: [21, 9], label: '21:9' },
    { value: [5, 4], label: '5:4' },
    { value: [4, 3], label: '4:3' },
    { value: [3, 2], label: '3:2' },
]

const Controls = () => {
    const firstScreenState = useAppSelector(state => state.screens.firstScreen)
    const secondScreenState = useAppSelector(state => state.screens.secondScreen)

    const [firstScreen, setFirstScreen] = useState<number[]>([...firstScreenState])
    const [secondScreen, setSecondScreen] = useState<number[]>([...secondScreenState])
    const dispatch = useAppDispatch()

    const handleCompare = () => {
        dispatch(setFirstScreenState(firstScreen))
        dispatch(setSecondScreenState(secondScreen))
    };

    const handleInputChange = (screenIndex: number, inputIndex: number, value: number[]) => {
        if (screenIndex === 0) {
            setFirstScreen(value)
        } else if (screenIndex === 1) {
            setSecondScreen(value)
        } else {
            throw('Wrong screen number')
        }
    };

    const handleSelectChange = (screenIndex: number, value: number[] | string) => {
        if (typeof(value) === "string") {
            return
        }

        if (screenIndex === 0) {
            dispatch(setFirstScreenState([firstScreen[0], ...value]))
        } else if (screenIndex === 1) {
            dispatch(setSecondScreenState([secondScreen[0], ...value]))
        } else {
            throw('Wrong screen number')
        }
    };

    return (
        <div className={cl.controls}>
            <div className={cl.controls__item}>
                <ControlsForm
                    title='Экран 1'
                    newState={firstScreen}
                    handleInputChange={handleInputChange}
                    handleSelectChange={handleSelectChange}
                    screenIndex={0}
                    options={options}
                    showMainInput={true}
                    tooltipText='Можно ввести как соотношение сторон (16:9), так и разрешение экрана (1920х1080)'
                />
            </div>
            <div className={cl.controls__item}>
                <ControlsForm
                    title='Экран 2'
                    newState={secondScreen}
                    handleInputChange={handleInputChange}
                    handleSelectChange={handleSelectChange}
                    screenIndex={1}
                    options={options}
                    showMainInput={true}
                    tooltipText='Можно ввести как соотношение сторон (16:9), так и разрешение экрана (1920х1080)'
                />
            </div>
            <div className={cl.controls__button}>
                <Button handleClick={handleCompare}>Сравнить</Button>
            </div>
        </div>
    );
};

export default Controls;
