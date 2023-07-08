import truncateAfterComma from './truncateAfterComma';

const calculateSizesInCm = (firstScreenParams: number[], secondScreenParams: number[]): number[] => {
    // Диагональ экранов в см
    const diag1 = truncateAfterComma(2, firstScreenParams[0] * 2.54)
    const diag2 = truncateAfterComma(2, secondScreenParams[0] * 2.54)

    // Длины сторон в единицах соотношения сторон
    const x1 = truncateAfterComma(2, firstScreenParams[1] * 2.54)
    const y1 = truncateAfterComma(2, firstScreenParams[2] * 2.54)
    const x2 = truncateAfterComma(2, secondScreenParams[1] * 2.54)
    const y2 = truncateAfterComma(2, secondScreenParams[2] * 2.54)

    // Длины диагоналей в единицах соотношения сторон
    const z1 = truncateAfterComma(2, Math.sqrt(x1*x1 + y1*y1))
    const z2 = truncateAfterComma(2, Math.sqrt(x2*x2 + y2*y2))

    // Размеры первого экрана, см
    const width1 = truncateAfterComma(2, diag1 / z1*x1)
    const height1 = truncateAfterComma(2, diag1 / z1*y1)

    // Размеры второго экрана, см
    const width2 = truncateAfterComma(2, diag2 / z2*x2)
    const height2 = truncateAfterComma(2, diag2 / z2*y2)

    // Площадь экранов, см кв.
    const area1 = truncateAfterComma(2, width1 * height1)
    const area2 = truncateAfterComma(2, width2 * height2)

    return [width1, height1, width2, height2, diag1, diag2, area1, area2]
}

export default calculateSizesInCm