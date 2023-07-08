import truncateAfterComma from './truncateAfterComma';

const calculatePPI = ( diag1: number, diag2: number, res1: number[], res2: number[]): number[] => {
    const ppi1 = truncateAfterComma(2, Math.sqrt(Math.pow(res1[0], 2) + Math.pow(res1[1], 2)) / diag1)
    const ppi2 = truncateAfterComma(2, Math.sqrt(Math.pow(res2[0], 2) + Math.pow(res2[1], 2)) / diag2)

    return [ppi1, ppi2]
}

export default calculatePPI