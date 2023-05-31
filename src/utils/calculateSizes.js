import truncateAfterComma from './truncateAfterComma';

const calculateSizes = (screensParams) => {
    // Диагональ экранов в дюймах
    const diag1 = screensParams[0][0];
    const diag2 = screensParams[1][0];

    // Длины сторон в единицах соотношения сторон
    const [x1, y1] = screensParams[0][1];
    const [x2, y2] = screensParams[1][1];

    // Длины диагоналей в единицах соотношения сторон
    const z1 = truncateAfterComma(2, Math.sqrt(x1*x1 + y1*y1));
    const z2 = truncateAfterComma(2, Math.sqrt(x2*x2 + y2*y2));

    // Размеры первого экрана, дюймы
    const width1 = truncateAfterComma(2, diag1 / z1 * x1);
    const height1 = truncateAfterComma(2, diag1 / z1 * y1);

    // Размеры второго экрана, дюймы
    const width2 = truncateAfterComma(2, diag2 / z2 * x2);
    const height2 = truncateAfterComma(2, diag2 / z2 * y2);

    return [
        diag1, diag2,
        width1, height1,
        width2, height2
    ]
}

export default calculateSizes;