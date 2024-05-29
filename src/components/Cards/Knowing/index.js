import React, { useContext, useState } from "react";  

import {  

    ContentKnow,
    ContentKnowIcon,
    ContentKnowText

} from "./styled";

import Check from "components/Form/Check";

export default function CardKnowing({ formValue, changeForm, preview }){  

    return ( 
        <>
        
            <ContentKnow preview={preview}>
                <ContentKnowIcon  preview={preview} />
                <ContentKnowText  preview={preview}>
                    Os vídeos de Clips são videos estilo "Vida Real" que geram conexão e entretenimento para quem assiste por se parecer muito com as situações de uso do cliente. Não são vídeos publicitários e de alta produção gravados em estúdio.
                </ContentKnowText>
            </ContentKnow>
            <Check label={"Estou ciente"} disabled={ preview } secondary checked={preview ? preview : formValue('knowing')} onChange={preview ? null : e => changeForm( !formValue('knowing'), 'knowing')} />
                                                
        </>
    );
}