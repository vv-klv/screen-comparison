import { useState } from "react"
import cl from "./Screen.module.scss"

interface IScreenProps {
    width: number
    height: number
    isInFront: boolean
    maxSize: number
}

const Screen = ({ width, height, isInFront, maxSize }: IScreenProps) => {
    const [screenHeight, setScreenHeight] = useState(height)
    const [screenWidth, setScreenWidth] = useState(width)

    // if (screenHeight > maxSize) {
    //     setScreenWidth(prev => prev * screenHeight/maxSize)
    //     setScreenHeight(maxSize)
    // }

    return (
        <div
            className={`${cl.screen} ${isInFront ? cl.screen_inFront : ""}`}
            style={{ height: `${height}px`, width: `${width}px` }}
        />
    )
}

export default Screen
