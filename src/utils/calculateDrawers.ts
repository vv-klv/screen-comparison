import truncateAfterComma from "./truncateAfterComma";

const calculateDrawers = (width1: number, height1: number, width2: number, height2: number): number[] => {
    const screenInFront = width1 * height1 >= width2 * height2 ? 1 : 0

    // Относительная ширина отрисовываемых экранов, 1 = 100% drawerWidth
    const xDrawParam1 = width1 >= width2 ? 1 : truncateAfterComma(4, width1 / width2)
    const xDrawParam2 = width2 >= width1 ? 1 : truncateAfterComma(4, width2 / width1)

    // Относительная высота отрисовываемых экранов, 1 = 100% drawerWidth
    const yDrawParam1 = truncateAfterComma(4, height1 / Math.max(width1, width2))
    const yDrawParam2 = truncateAfterComma(4, height2 / Math.max(width1, width2))

    return [screenInFront, xDrawParam1, xDrawParam2, yDrawParam1, yDrawParam2]
}

export default calculateDrawers