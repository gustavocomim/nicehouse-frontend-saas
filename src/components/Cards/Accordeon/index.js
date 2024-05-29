import React, { useState } from "react";  
import { useHistory } from "react-router-dom";

import {   

    CardExpandContainer,
    CardExpandContainerHeader,
    CardExpandContainerHeaderIcon,
    CardExpandContainerHeaderTitle,
    CardExpandContainerHeaderLabel,
    CardExpandContainerHeaderLabelDecoration,
    CardExpandContainerHeaderLabelText,
    CardExpandContainerBody,
    CardExpandTitle,
    CardExpandText


} from "./styled";
 

export default function CardAccordeon({ title, label, children }){  
    
    const [active, setActive] = useState(true)

    return ( 
        <> 
            <CardExpandContainer>
                <CardExpandContainerHeader closed={!active} onClick={() => setActive(!active)}>
                    <CardExpandContainerHeaderIcon active={active} />
                    <CardExpandContainerHeaderTitle>{ title }</CardExpandContainerHeaderTitle>
                    { 
                        label ? 
                            <CardExpandContainerHeaderLabel >
                                <CardExpandContainerHeaderLabelDecoration />
                                <CardExpandContainerHeaderLabelText>{ label }</CardExpandContainerHeaderLabelText >
                            </CardExpandContainerHeaderLabel >
                        : null 
                    }
                </CardExpandContainerHeader>
                {
                    !active ? null :
                    <CardExpandContainerBody>
                        { children }
                    </CardExpandContainerBody>
                }
            </CardExpandContainer> 
        </>
    );
}