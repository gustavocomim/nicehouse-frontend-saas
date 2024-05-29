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
    CardHomeContentBodyAction

} from "./styled"; 

import Button from "components/Form/Button"; 

export default function CardHome({ label, title, text, date, id }){  
    
    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    return ( 
        <>
            <CardHomeContent>
                <CardHomeContentHeader>
                    <CardHomeContentLabel isSuccess={label === "Finalizada"}>
                        <CardHomeContentLabelDecoration />
                        <CardHomeContentLabelText>{ label }</CardHomeContentLabelText>
                    </CardHomeContentLabel>
                </CardHomeContentHeader>
                <CardHomeContentBody>
                    <CardHomeContentBodyTitle>{ title }</CardHomeContentBodyTitle>
                    <CardHomeContentBodyText>{ text }</CardHomeContentBodyText>
                    { !date ? <CardHomeContentBodyDate>&nbsp;</CardHomeContentBodyDate> : <CardHomeContentBodyDate>Expectativa de entrega: <big>{ date }</big></CardHomeContentBodyDate> }
                    <CardHomeContentBodyActions>
                        <CardHomeContentBodyAction>
                            <Button outline primary onClick={() => navigate(`dashboard/campaing/details/${ id }`)} >Ver detalhes</Button>
                        </CardHomeContentBodyAction>
                    </CardHomeContentBodyActions>
                </CardHomeContentBody>
            </CardHomeContent>             
        </>
    );
}