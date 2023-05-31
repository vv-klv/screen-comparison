import React, { useState } from 'react';
import Rectangle from '../Rectangle/Rectangle';
import cl from './RectanglesDrawer.module.scss';
import calculateSizes from '../../../utils/calculateSizes';

const RectanglesDrawer = () => {
    const [screensParams, _] = useState([[27, [16, 9]], [34, [32, 9]]]);

    const [diag1, diag2,
           width1, height1,
           width2, height2] = calculateSizes(screensParams);

    const screenInFront = diag1*diag1 >= diag2*diag2 ? 1 : 0;

    const drawerWidth = 650;

    // Ширина отрисовываемых экранов, px
    const xDrawParam1 = width1 >= width2 ? 1 : width1 / width2;
    const xDrawParam2 = width2 >= width1 ? 1 : width2 / width1;

    // Высота отрисовываемых экранов, px
    let yDrawParam1 = height1 / Math.min(width1, width2);
    let yDrawParam2 = height2 / Math.min(width1, width2);

    const screenDrawParams = [
        [xDrawParam1 * drawerWidth, xDrawParam2 * drawerWidth],
        [yDrawParam1 * drawerWidth, yDrawParam2 * drawerWidth]
    ]

    return (
        <div
            className={cl.drawer}
            style={{ height: `${Math.max(yDrawParam1, yDrawParam2) * drawerWidth}px`}}
        >
            {screensParams.map(([size, aspect], idx) =>
                <Rectangle
                    key={idx}
                    isInFront={idx === screenInFront}
                    width={screenDrawParams[0][idx]}
                    height={screenDrawParams[1][idx]}
                />
            )}
        </div>
    );
};

export default RectanglesDrawer;
