import React, { useState } from "react";  
import { useParams } from "react-router-dom";

import {  
 
    DashboardTitle,
    DashboardText,

    BodyHeader,
    BodyHeaderInfo, 

} from "./styled";


import { Row, Col } from "reactstrap";

import CardCampaing from "components/Cards/Campaing";


export default function CampaingSelectType({ campaings }){   

    const LINE_SIZE = 4 

    return ( 
        <>
            <BodyHeader>
                <BodyHeaderInfo>
                    <DashboardTitle small> Campanhas </DashboardTitle> 
                    <DashboardText> Escolha o tipo de campanha que você gostaria de criar! </DashboardText> 
                </BodyHeaderInfo>
            </BodyHeader>

            {
                [ ...(new Array( Math.ceil( campaings?.length / LINE_SIZE  ) )) ].map((line, lineKey) => 
                    <Row key={lineKey}>
                        {
                            campaings?.slice((lineKey * LINE_SIZE), ( (lineKey + 1) * LINE_SIZE ) )?.map((item, key) => 
                                <Col key={ `${lineKey}-${key}` }>
                                    <CardCampaing { ...item } />
                                </Col>
                            )
                        }
                    </Row>
                )
            }
        </>
    );
}