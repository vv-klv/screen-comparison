const truncateAfterComma = (n, number) => {
    if (n < 0) return Math.trunc(number);

    // Обрезка до n знаков после запятой
    return Math.trunc(number * Math.pow(10, n)) / Math.pow(10, n);
}

export default truncateAfterComma;