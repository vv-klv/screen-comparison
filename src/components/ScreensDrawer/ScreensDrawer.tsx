import { useEffect, useState } from "react";
import { useResize } from "../../hooks/useResize";
import calculateSizes from "../../utils/calculateSizes";
import calculateDrawers from "../../utils/calculateDrawers";
import truncateAfterComma from "../../utils/truncateAfterComma";
import Screen from "../UI/Screen/Screen";
import cl from "./ScreensDrawer.module.scss"

interface IScreensDrawerProps {
    firstScreen: number[];
    secondScreen: number[];
}

const ScreensDrawer = ({ firstScreen, secondScreen }: IScreensDrawerProps) => {
    const [firstScreenDrawParams, setFirstScreenDrawParams] = useState([1, 0.5624])
    const [secondScreenDrawParams, setSecondScreenDrawParams] = useState([0.8889, 0.5])

    let [width1, height1, width2, height2] = calculateSizes(firstScreen, secondScreen)
    let [screenInFront, xDraw1, xDraw2, yDraw1, yDraw2] = calculateDrawers(width1, height1, width2, height2)

    const maxSize = useResize()

    useEffect(() => {
        [width1, height1, width2, height2] = calculateSizes(firstScreen, secondScreen);
        [screenInFront, xDraw1, xDraw2, yDraw1, yDraw2] = calculateDrawers(width1, height1, width2, height2)
    }, [firstScreen, secondScreen]);

    useEffect(() => {
        let ratio = 1;

        if (Math.max(yDraw1, yDraw2) > 1) {
            ratio = truncateAfterComma(4, 1 / Math.max(yDraw1, yDraw2))
        }

        setFirstScreenDrawParams([xDraw1 * maxSize * ratio, yDraw1 * maxSize * ratio])
        setSecondScreenDrawParams([xDraw2 * maxSize * ratio, yDraw2 * maxSize * ratio])
    }, [xDraw1, xDraw2, yDraw1, yDraw2, maxSize])


    return (
        <div
            className={cl.drawer}
            style={{
                height: `${Math.max(yDraw1, yDraw2) * maxSize}px`,
                width: `${Math.max(xDraw1, xDraw2) * maxSize}px`
            }}
        >
            <Screen
                isInFront={0 === screenInFront}
                width={firstScreenDrawParams[0]}
                height={firstScreenDrawParams[1]}
                maxSize={maxSize}
            />
            <Screen
                isInFront={1 === screenInFront}
                width={secondScreenDrawParams[0]}
                height={secondScreenDrawParams[1]}
                maxSize={maxSize}
            />
        </div>
    );
};

export default ScreensDrawer;
