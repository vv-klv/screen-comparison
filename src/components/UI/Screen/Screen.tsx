import cl from "./Screen.module.scss"

interface IScreenProps {
    width: number
    height: number
    isInFront: boolean
    maxSize: number
}

const Screen = ({ width, height, isInFront }: IScreenProps) => {
    return (
        <div
            className={`${cl.screen} ${isInFront ? cl.screen_inFront : ""}`}
            style={{ height: `${height}px`, width: `${width}px` }}
        />
    )
}

export default Screen
