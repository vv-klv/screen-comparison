import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';
import cl from './ControlsForm.module.scss';

const ControlsForm = () => {
    const [isCustomAspect, setIsCustomAspect] = useState(false);

    return (
        <div className={cl.form}>
            <Input isVisible={true} placeholder='Size'/>
            <Select setIsCustomAspect={setIsCustomAspect} />
            <Input isVisible={isCustomAspect} placeholder='Width'/>
            <Input isVisible={isCustomAspect} placeholder='Height' cross/>
        </div>
    );
};

export default ControlsForm;
