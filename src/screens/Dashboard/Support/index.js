import React, { useEffect } from "react";  

import {  

    DashboardTitle,
    DashboardText,
    DashboardImage,
    

} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";

import CardChatSupport from "components/Cards/ChatSupport";
import { useIntercom } from "react-use-intercom";


export default function DashboardSupport(){  
    
    const { hide, show } = useIntercom()

    useEffect(() => {
        show()
        return () => {
            hide()
        }
    },[  ])

    return ( 
        <>
            <ContainerAuthenticated side={2}> 
                        
                <DashboardTitle centred small> Precisa de ajuda? </DashboardTitle> 
                <DashboardText centred> Envie uma mensagem para a família Nicehouse </DashboardText> 
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                       <DashboardImage />
                        {/* <CardChatSupport /> */}
                    </Col>
                    <Col lg={2}></Col>
                </Row>
                        
            </ContainerAuthenticated> 
        </>
    );
}