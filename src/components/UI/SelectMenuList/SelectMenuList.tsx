import { useRef, useEffect } from "react";
import { components } from "react-select";
import { Scrollbars } from "react-custom-scrollbars-2";
import renderThumbVertical from "../RenderThumbs/RenderThumbVertical";

const SelectMenuList = ({innerRef, ...props}: any) => {
    const intermediateRef = useRef();

    useEffect(() => {
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