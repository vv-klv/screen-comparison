import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setFirstScreenResState, setSecondScreenResState } from "../../store/screensSlice";
import calculateSizes from "../../utils/calculateSizes";
import calculateSizesInCm from "../../utils/calculateSizesInCm";
import calculatePPI from "../../utils/calculatePPI";
import CalculationsTable from "../CalculationsTable/CalculationsTable";
import ControlsForm from "../ControlsForm/ControlsForm";
import Button from "../UI/Button/Button";
import cl from "./ScreensCalculations.module.scss";

const options: TOption[]  = [
    { value: 'custom', label: 'Своё' },
    { value: [1920, 1080], label: '1920x1080 (FHD)' },
    { value: [2560, 1440], label: '2560x1440 (QHD, 2K)' },
    { value: [3840, 2160], label: '3840x2160 (UHD, 4K)' },

    { value: [1920, 1200], label: '1920x1200' },
    { value: [2560, 1080], label: '2560x1080 (WFHD)' },
    { value: [2560, 1600], label: '2560x1600' },
    { value: [3440, 1440], label: '3440x1440 (WHQD)' },
    { value: [3840, 1600], label: '3840x1600' },
    { value: [5120, 1440], label: '5120x1440 (UWQHD)' },
    { value: [5120, 2160], label: '5120x2160 (WUHD, 5K2K)' },
    { value: [5120, 2880], label: '5120x2880 (5K)' },
    { value: [7680, 4320], label: '7680×4320 (8K)' },
    { value: [1280, 720], label: '1280x720 (HD)' },
    { value: [1280, 800], label: '1280x800' },
]

const ScreensCalculations = () => {
    const firstScreenState = useAppSelector(state => state.screens.firstScreen)
    const secondScreenState = useAppSelector(state => state.screens.secondScreen)
    const firstScreenResState = useAppSelector(state => state.screens.firstScreenRes)
    const secondScreenResState = useAppSelector(state => state.screens.secondScreenRes)

    const [firstScreenRes, setFirstScreenRes] = useState<number[]>([...firstScreenResState])
    const [secondScreenRes, setSecondScreenRes] = useState<number[]>([...secondScreenResState])
    const [isNeedButton, setIsNeedButton] = useState(false)

    let [width1, height1, width2, height2, diag1, diag2, area1, area2] = calculateSizes(firstScreenState, secondScreenState)
    let [width1InCm, height1InCm, width2InCm, height2InCm, diag1InCm, diag2InCm, area1InCm, area2InCm] = calculateSizesInCm(firstScreenState, secondScreenState)
    let [ppi1, ppi2] = calculatePPI(firstScreenState[0], secondScreenState[0], firstScreenRes, secondScreenRes)
    let screenInFront = area1 >= area2 ? 1 : 0

    useEffect(() => {
        [width1, height1, width2, height2, diag1, diag2, area1, area2] = calculateSizes(firstScreenState, secondScreenState);
        [width1InCm, height1InCm, width2InCm, height2InCm, diag1InCm, diag2InCm, area1InCm, area2InCm] = calculateSizesInCm(firstScreenState, secondScreenState);
        [ppi1, ppi2] = calculatePPI(firstScreenState[0], secondScreenState[0], firstScreenRes, secondScreenRes)
        screenInFront = area1 >= area2 ? 1 : 0
    }, [firstScreenState, secondScreenState]);

    useEffect(() => {
        [ppi1, ppi2] = calculatePPI(firstScreenState[0], secondScreenState[0], firstScreenRes, secondScreenRes)
    }, [firstScreenResState, secondScreenResState]);

    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(setFirstScreenResState(firstScreenRes))
        dispatch(setSecondScreenResState(secondScreenRes))
    }

    const handleInputChange = (screenIndex: number, inputIndex: number, value: number[]) => {
        const index = screenIndex * 2 + inputIndex;
        switch (index) {
            case 0:
                setFirstScreenRes(prev => [value[0], prev[1]])
                return
            case 1:
                setFirstScreenRes(prev => [prev[0], value[1]])
                return
            case 2:
                setSecondScreenRes(prev => [value[0], prev[1]])
                return
            case 3:
                setSecondScreenRes(prev => [prev[0], value[1]])
                return
            default:
                throw('Wrong input number')
        }
    };

    const handleSelectChange = (screenIndex: number, value: number[] | string) => {
        if (typeof(value) === "string") {
            if (screenIndex === 0) {
                setFirstScreenRes([0, 0])
            } else if (screenIndex === 1) {
                setSecondScreenRes([0, 0])
            } else {
                throw('Wrong screen number')
            }
            return
        }

        if (screenIndex === 0) {
            setFirstScreenRes(value)
        } else if (screenIndex === 1) {
            setSecondScreenRes(value)
        } else {
            throw('Wrong screen number')
        }
    };

    return (
        <div className={cl.calculations}>
            <div className={cl.calculations__controls}>
                <div className={cl.calculations__form}>
                    <ControlsForm
                        title='Экран 1'
                        newState={firstScreenRes}
                        handleInputChange={handleInputChange}
                        handleSelectChange={handleSelectChange}
                        screenIndex={0}
                        options={options}
                        showSizeInput={false}
                        tooltipText=''
                        formDescription='Разрешение:'
                        isWideSelect={true}
                    />
                </div>
                <div className={cl.calculations__form}>
                    <ControlsForm
                        title='Экран 2'
                        newState={secondScreenRes}
                        handleInputChange={handleInputChange}
                        handleSelectChange={handleSelectChange}
                        screenIndex={1}
                        options={options}
                        showSizeInput={false}
                        tooltipText=''
                        formDescription='Разрешение:'
                        isWideSelect={true}
                    />
                </div>
                {
                    isNeedButton &&
                        <div className={cl.calculations__button}>
                            <Button handleClick={handleClick}>Посчитать</Button>
                        </div>
                }
            </div>

            <div className={cl.calculations__result}>
                <CalculationsTable
                    calculations={[width1, height1, width2, height2, diag1, diag2, area1, area2, ppi1, ppi2]}
                    calculationsInCm={[width1InCm, height1InCm, width2InCm, height2InCm, diag1InCm, diag2InCm, area1InCm, area2InCm]}
                    screenInFront={screenInFront}
                />
            </div>
        </div>
    );
};

export default ScreensCalculations;
