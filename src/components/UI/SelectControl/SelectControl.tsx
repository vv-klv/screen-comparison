import { useRef, useEffect } from "react";
import { components } from "react-select";

const SelectControl = ({innerRef, isWide = false, ...props}: any) => {
    const intermediateRef = useRef();

    useEffect(() => {
        // @ts-ignore
        innerRef(intermediateRef.current ? intermediateRef.current.view : null);
    }, [innerRef, intermediateRef]);

    return (
        <components.Control {...props} className={isWide ? 'react-select__control--wide' : 'react-select__control'}>
            { props.children }
        </components.Control>
    );
};

export default SelectControl;
