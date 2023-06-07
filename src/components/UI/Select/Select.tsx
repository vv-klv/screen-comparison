import { Dispatch, SetStateAction } from 'react';
import ReactSelect, { SingleValue } from 'react-select';
import './Select.scss';

const options: TOptions[]  = [
    { value: '16:9', label: '16:9' },
    { value: '16:10', label: '16:10' },
    { value: '21:9', label: '21:9' },
    { value: '5:4', label: '5:4' },
    { value: '4:3', label: '4:3' },
    { value: 'custom', label: 'Своё' },
]

interface ISelectProps {
    setIsCustomAspect:  Dispatch<SetStateAction<boolean>>
    handleSelectChange: (value: number[]) => void
}

const Select = ({setIsCustomAspect, handleSelectChange}: ISelectProps) => {
    const handleSelect = (option: SingleValue<{value: string, label: string}>) => {
        option?.value === "custom"
            ? setIsCustomAspect(true)
            : setIsCustomAspect(false)

        switch (option?.value) {
            case '16:9':
                handleSelectChange([16, 9])
                break
            case '16:10':
                handleSelectChange([16, 10])
                break
            case '21:9':
                handleSelectChange([21, 9])
                break
            case '5:4':
                handleSelectChange([5, 4])
                break
            case '4:3':
                handleSelectChange([4, 3])
                break
            default:
                break
        }
    }

    return <ReactSelect
        classNamePrefix='react-select'
        options={options}
        defaultValue={options[0]}
        onChange={option => handleSelect(option)}
        isSearchable={false}
    />
}

export default Select
