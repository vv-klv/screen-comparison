import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setFirstScreen, setSecondScreen } from "../../store/screensSlice";
import ControlsForm from "../ControlsForm/ControlsForm";
import Button from "../UI/Button/Button";
import cl from "./Controls.module.scss";

const Controls = () => {
    const firstScreen = useAppSelector(state => state.screens.firstScreen)
    const secondScreen = useAppSelector(state => state.screens.secondScreen)

    const [newFirstScreen, setNewFirstScreen] = useState<number[]>([...firstScreen])
    const [newSecondScreen, setNewSecondScreen] = useState<number[]>([...secondScreen])
    const dispatch = useAppDispatch()

    // TODO нужны ли эти if ?
    const handleClick = () => {
        if (firstScreen.flat() !== newSecondScreen.flat()) {
            dispatch(setFirstScreen(newFirstScreen))
        }

        if (secondScreen.flat() !== newSecondScreen.flat()) {
            dispatch(setSecondScreen(newSecondScreen))
        }
    };

    return (
        <div className={cl.controls}>
            <div className={cl.controls__item}>
                <h3 className={cl.controls__title}>Экран 1</h3>
                <ControlsForm
                    newScreen={newFirstScreen}
                    setNewScreen={setNewFirstScreen}
                    screenIndex={0}
                />
            </div>
            <div className={cl.controls__item}>
                <h3 className={cl.controls__title}>Экран 2</h3>
                <ControlsForm
                    newScreen={newSecondScreen}
                    setNewScreen={setNewSecondScreen}
                    screenIndex={1}
                />
            </div>
            <div className={cl.controls__button}>
                <Button handleClick={handleClick}>Сравнить</Button>
            </div>
        </div>
    );
};

export default Controls;
