import React from "react";  

import {  
    ContentBody,
    ContentAnimation,
    DashboardImage,
    DashboardTitle,
    DashboardText
} from "./styled";

import { 
    Animation
} from "ui/styled";

import ContainerUnauthenticated from "containers/Unauthenticated";

export default function NotFound(){ 
 
    return ( 
        <ContainerUnauthenticated keep> 
            <ContentBody>
                <ContentAnimation>
                    <DashboardImage />
                    <DashboardTitle>Ops! Parece que você tropeçou em um post inexistente.</DashboardTitle>
                    <DashboardText>Encontrar o caminho certo às vezes é mais difícil do que conseguir likes. Parece que você está meio perdido em nossa plataforma. Não se preocupe, nossos Creators estão rastreando seu clique perdido neste vasto universo online.</DashboardText>
                </ContentAnimation>
            </ContentBody>  
        </ContainerUnauthenticated>
    );
}