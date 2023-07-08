import { useState, ReactNode } from "react";
import cl from "./Tooltip.module.scss";

interface ITooltipProps {
    content: string
    delay: number
    children?: ReactNode
}

const Tooltip = ({ content, delay, children }: ITooltipProps) => {
    const [active, setActive] = useState(false);

    const showTip = () => {
        setTimeout(() => {
            setActive(true);
        }, delay || 250);
    };

    const hideTip = () => {
        setTimeout(() => {
            setActive(false);
        }, delay || 250);
    };

    return (
        <div
            className={`${cl.tooltip__wrapper}`}
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {children}
            {
                active &&
                <div className={`${cl.tooltip__tip}`}>
                    {content}
                </div>
            }
        </div>
    );
};

export default Tooltip;
