import React, { useState } from "react";  

import {  

    BodyTabs,
    BodyTabItem,
    BodyTabItemText,
    BodyTabItemDecoration

} from "./styled";


export default function CampaingTabs({ active, setActive, tabs}){   
    return ( 
        <>
            <BodyTabs>
                {
                    tabs?.map((item, key) => 
                        <BodyTabItem key={key} onClick={() => setActive(key)}>
                            <BodyTabItemText active={active === key}>{item.title}</BodyTabItemText>
                            <BodyTabItemDecoration active={active === key} />
                        </BodyTabItem>
                    )
                }
            </BodyTabs>
        </>
    );
}