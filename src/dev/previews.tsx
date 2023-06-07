import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import Controls from "../components/Controls/Controls";
import { PaletteTree } from "./palette";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Controls">
                <Controls/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;