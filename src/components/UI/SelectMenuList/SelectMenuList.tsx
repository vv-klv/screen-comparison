import { useRef, useEffect } from "react";
import { components } from "react-select";
import { Scrollbars } from "react-custom-scrollbars-2";
import renderThumbVertical from "../RenderThumbs/RenderThumbVertical";
import cl from "./SelectMenuList.module.scss"

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
                    <Scrollbars ref={intermediateRef}
                                className={cl.menuList}
                                renderThumbVertical={renderThumbVertical}
                    >
                        { props.children }
                    </Scrollbars>
                }

            </div>
        </components.MenuList>
    );
};

export default SelectMenuList;