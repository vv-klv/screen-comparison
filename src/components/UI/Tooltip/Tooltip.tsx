import { useState, ReactNode } from "react";
import cl from "./Tooltip.module.scss";

interface ITooltipProps {
    content: string
    direction: string
    delay: number
    children?: ReactNode
}

const Tooltip = ({ content, direction, delay, children }: ITooltipProps) => {
    const [active, setActive] = useState(false);
    let timeout;

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, delay || 250);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
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
                <div className={`${cl.tooltip__tip} right`}>
                    {content}
                </div>
            }
        </div>
    );
};

export default Tooltip;
