// Обрезка до n знаков после запятой
const truncateAfterComma = (n: number, number: number): number => {
    return n < 0
        ? Math.trunc(number)
        : Math.trunc(number * Math.pow(10, n)) / Math.pow(10, n);
}

export default truncateAfterComma;