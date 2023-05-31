import React from 'react';
import ControlsForm from '../ControlsForm/ControlsForm';
import cl from "./Controls.module.scss";

const Controls = () => {
    return (
        <div className={cl.controls}>
            <div className={cl.controls__item}>
                <h3 className={cl.controls__title}>Экран 1</h3>
                <ControlsForm />
            </div>
            <div className={cl.controls__item}>
                <h3 className={cl.controls__title}>Экран 2</h3>
                <ControlsForm />
            </div>
            {/*<div className={cl.controls__item}>*/}
            {/*    <h3 className={cl.controls__title}>Экран 2</h3>*/}
            {/*    <ControlsForm />*/}
            {/*</div>*/}
        </div>
    );
};

export default Controls;
