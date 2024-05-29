import React, { useContext, useState } from "react";  
import { useHistory, useParams } from "react-router-dom";

import {  

    PanelForm,

    BodyPanel,
    BodyStepper,
    BodyStepperDecoration,
    BodyStepperItem,
    BodyStepperItemDecoration,
    BodyStepperItemText,
    BodyStepperItemDecorationIcon,

} from "./styled";


export default function CampaingStepper({ steps, step }){  

    return ( 
        <>
            <BodyStepper>
                <BodyStepperDecoration />
                {
                    steps?.map((item, key) => {
                        const isActive = (key < (step||0))
                        return (
                            <>
                                <BodyStepperItem key={key}>
                                    <BodyStepperItemDecoration active={ isActive } disabled={!isActive && key > (step||0)}>{  isActive ? <BodyStepperItemDecorationIcon /> : (key + 1) }</BodyStepperItemDecoration>
                                    <BodyStepperItemText disabled={!isActive && key > (step||0)}>{ item?.title }</BodyStepperItemText>
                                </BodyStepperItem>
                            </>
                        )
                    })
                }
            </BodyStepper>
        </>
    );
}