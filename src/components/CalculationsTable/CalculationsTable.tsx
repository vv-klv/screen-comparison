import cl from "./CalculationsTable.module.scss"

interface ICalculationsTable {
    screenInFront: number
    calculations: number[]
    calculationsInCm: number[]
}

const CalculationsTable = ({ screenInFront, calculations, calculationsInCm }: ICalculationsTable) => {
    const [width1, height1, width2, height2, diag1, diag2, area1, area2, ppi1, ppi2] = calculations
    const [width1InCm, height1InCm, width2InCm, height2InCm, diag1InCm, diag2InCm, area1InCm, area2InCm] = calculationsInCm

    return (
        <table className={cl.table}>
            <thead>
                <tr className={cl.header}>
                    <th ><b>Параметр</b></th>
                    <th className={`${screenInFront === 0 ? cl.inFront : cl.inRear}`}><b>Экран 1</b></th>
                    <th className={`${screenInFront === 1 ? cl.inFront : cl.inRear}`}><b>Экран 2</b></th>
                </tr>
            </thead>
            <tbody className={cl.body}>
                <tr>
                    <td><b>Диагональ,</b><span> in / см</span></td>
                    <td className={`${screenInFront === 0 ? cl.inFront : cl.inRear}`}>{ diag1 } / { diag1InCm }</td>
                    <td className={`${screenInFront === 1 ? cl.inFront : cl.inRear}`}>{ diag2 } / { diag2InCm }</td>
                </tr>
                <tr>
                    <td><b>Ширина,</b><span> in / см</span></td>
                    <td className={`${screenInFront === 0 ? cl.inFront : cl.inRear}`}>{ width1 } / { width1InCm }</td>
                    <td className={`${screenInFront === 1 ? cl.inFront : cl.inRear}`}>{ width2 } / { width2InCm }</td>
                </tr>
                <tr>
                    <td><b>Высота,</b><span> in / см</span></td>
                    <td className={`${screenInFront === 0 ? cl.inFront : cl.inRear}`}>{ height1 } / { height1InCm }</td>
                    <td className={`${screenInFront === 1 ? cl.inFront : cl.inRear}`}>{ height2 } / { height2InCm }</td>
                </tr>
                <tr>
                    <td><b>Площадь,</b><span> in&#178; / см&#178;</span></td>
                    <td className={`${screenInFront === 0 ? cl.inFront : cl.inRear}`}>{ area1 } / { area1InCm }</td>
                    <td className={`${screenInFront === 1 ? cl.inFront : cl.inRear}`}>{ area2 } / { area2InCm }</td>
                </tr>
                <tr>
                    <td><b>PPI</b></td>
                    <td className={`${screenInFront === 0 ? cl.inFront : cl.inRear}`}>{ ppi1 }</td>
                    <td className={`${screenInFront === 1 ? cl.inFront : cl.inRear}`}>{ ppi2 }</td>
                </tr>
            </tbody>
        </table>
    );
};

export default CalculationsTable;
