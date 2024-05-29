import React, { useState } from "react";  
import { useHistory } from "react-router-dom";

import {  
    
    CardHomeContent,
    CardHomeContentHeader,
    CardHomeContentLabel,
    CardHomeContentLabelDecoration,
    CardHomeContentLabelText,
    CardHomeContentBody,
    CardHomeContentBodyTitle,
    CardHomeContentBodyText,
    CardHomeContentBodyDate,
    CardHomeContentBodyActions,
    CardHomeContentBodyAction,
    CardHomeImage,
    CardHomeWrapperBody

} from "./styled"; 

import Button from "components/Form/Button"; 

export default function CardCampaing({ title, text, image, commingSoon, type }){  
    
    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    return ( 
        <>
            <CardHomeContent>
                <CardHomeImage image={image}>
                    {
                        !commingSoon ? null :
                        <CardHomeContentHeader>
                            <CardHomeContentLabel>
                                <CardHomeContentLabelText>Em breve</CardHomeContentLabelText>
                            </CardHomeContentLabel>
                        </CardHomeContentHeader>
                    }
                </CardHomeImage>
                
                <CardHomeWrapperBody disabled={!!commingSoon}>
                    <CardHomeContentBody>
                        <CardHomeContentBodyTitle>{ title }</CardHomeContentBodyTitle>
                        <CardHomeContentBodyText>{ text }</CardHomeContentBodyText>
                    </CardHomeContentBody>

                    <CardHomeContentBodyActions>
                        <CardHomeContentBodyAction>
                            <Button primary onClick={commingSoon ? null : () => navigate(`dashboard/campaing/create/${ type }`)}> {'>'} SELECIONAR</Button>
                        </CardHomeContentBodyAction>
                    </CardHomeContentBodyActions>
                </CardHomeWrapperBody>
            </CardHomeContent>             
        </>
    );
}