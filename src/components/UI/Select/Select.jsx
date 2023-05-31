import React from 'react';
import ReactSelect from 'react-select';
import './Select.scss';

const options = [
    { value: '16:9', label: '16:9' },
    { value: '21:9', label: '21:9' },
    { value: '4:3', label: '4:3' },
    { value: '5:4', label: '5:4' },
    { value: 'Custom', label: 'Custom' },
];

const Select = ({setIsCustomAspect}) => {

    const handleChange = (option) => {
        option.value === "Custom"
        ? setIsCustomAspect(true)
        : setIsCustomAspect(false)
    }

    return <ReactSelect
        classNamePrefix='react-select'
        options={options}
        defaultValue={options[0]}
        onChange={handleChange}
    />
};

export default Select;
