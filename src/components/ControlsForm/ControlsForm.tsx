import { Dispatch, SetStateAction, useState } from "react"
import Tooltip from '../UI/Tooltip/Tooltip'
import Input from "../UI/Input/Input"
import Select from "../UI/Select/Select"
import cl from "./ControlsForm.module.scss"

interface IControlsFormProps {
    newScreen: number[];
    setNewScreen: Dispatch<SetStateAction<number[]>>;
    screenIndex: number;
}

const ControlsForm = ({ newScreen, setNewScreen }: IControlsFormProps) => {
    const [isCustomAspect, setIsCustomAspect] = useState(false);
    const [tmpScreen, setTmpScreen] = useState(newScreen);
    // [27, 16, 9]
    const handleChange = (idx: number, value: number) => {
        const newScreen = [...tmpScreen]
        newScreen[idx] = value
        setNewScreen(newScreen)
        setTmpScreen(newScreen)
    };

    const handleSelectChange = (value: number[]) => {
        const newScreen = [...tmpScreen]
        newScreen[1] = value[0]
        newScreen[2] = value[1]
        setNewScreen(newScreen)
        setTmpScreen(newScreen)
    };

    return (
        <div className={cl.form}>

            <Input
                isVisible={true}
                placeholder="Размер"
                handleChange={handleChange}
                idx={0}
            />
            <Select
                setIsCustomAspect={setIsCustomAspect}
                handleSelectChange={handleSelectChange}
            />
            {
                isCustomAspect &&
                <Tooltip
                    content={"Можно ввести как соотношение сторон (16:9), так и разрешение экрана (1920х1080)"}
                    delay={250}
                    direction={"right"}
                    children={"?"}
                />
            }
            <Input
                isVisible={isCustomAspect}
                placeholder="Ширина"
                handleChange={handleChange}
                idx={1}
            />
            <Input
                isVisible={isCustomAspect}
                placeholder="Высота"
                handleChange={handleChange}
                idx={2}
                cross
            />
        </div>
    );
};

export default ControlsForm;
