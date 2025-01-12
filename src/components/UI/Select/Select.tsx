import { Dispatch, SetStateAction } from 'react';
import ReactSelect, { SingleValue } from 'react-select';
import './Select.scss';
import SelectMenuList from "../SelectMenuList/SelectMenuList";
import SelectControl from "../SelectControl/SelectControl";

interface ISelectProps {
    setIsCustom?:  Dispatch<SetStateAction<boolean>>
    handleSelect: (value: number[] | string) => void
    options: TOption[]
    isWide?: boolean
}

const Select = ({ setIsCustom, handleSelect, options, isWide = false }: ISelectProps) => {
    const handleSelectChange = (option: SingleValue<TOption>) => {
        if (typeof(option?.value) === "string") {
            setIsCustom?.(true)
            handleSelect(option?.value ?? 'custom')
            return
        }

        setIsCustom?.(false)
        handleSelect(option?.value ?? [16, 9])
    }

    return (
        <ReactSelect
            components={{
                MenuList: SelectMenuList,
                Control: (props) => <SelectControl isWide={isWide} {...props} />
            }}
            captureMenuScroll={false}
            classNamePrefix='react-select'
            options={options}
            defaultValue={options[1]}
            onChange={option => handleSelectChange(option)}
            isSearchable={false}
        />
    )
}

export default Select
