import React, { useMemo, useState } from "react";  

import {  

    CardEmptyContainer,
    CardEmptyImage,
    CardEmptyTitle,
    CardEmptyText,

} from "./styled";


export default function CardEmpty(){  

    return ( 
        <>
            <CardEmptyContainer>
                <CardEmptyImage />
                <CardEmptyTitle>Luz, câmera e ação!</CardEmptyTitle>
                <CardEmptyText>
                    Nossos Creators estão trabalhando na sua campanha, em breve você vai conseguir visualizar as peças nessa seção. Vamos te notificar via e-mail ou pela nossa plataforma NiceHouse For Business.
                </CardEmptyText>
            </CardEmptyContainer>         
        </>
    );
}