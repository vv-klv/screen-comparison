import React from "react";
import { components } from "react-select";
import { Scrollbars } from "react-custom-scrollbars-2";

const renderThumbVertical = () => {
    return (
        <div
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: '0.125rem',
                width: "0.25rem"
            }}
        />
    );
}

const SelectMenuList = ({innerRef, ...props}: any) => {
    const intermediateRef = React.useRef();

    React.useEffect(() => {
        // @ts-ignore
        innerRef(intermediateRef.current ? intermediateRef.current.view : null);
    }, [innerRef, intermediateRef]);

    return (
        <components.MenuList {...props}>
            <div style={{ height: '15.75rem' }}>
                {   // @ts-ignore
                    <Scrollbars renderThumbVertical={renderThumbVertical} ref={intermediateRef}>
                        { props.children }
                    </Scrollbars>
                }

            </div>
        </components.MenuList>
    );
};

export default SelectMenuList;