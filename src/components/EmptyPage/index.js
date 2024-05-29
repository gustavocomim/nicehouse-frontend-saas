import React from "react";  

import {  
    DashboardAnimation,
    DashboardTitle,
    DashboardText,
    DashboardIllustration,
    ContentDashboardAction
} from "./styled";
 
import { Row, Col } from "reactstrap";
import Button from "components/Form/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function EmptyPage(){  

    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    return ( 
        <> 
            <Row>
                <Col md={6}>
                    <DashboardIllustration />
                </Col>
                <Col sm={12} md={6}> 
                    <DashboardTitle>
                        Transforme sua marca com pessoas autênticas
                    </DashboardTitle> 
                    <DashboardText>
                        Dê um passo ousado para ampliar seus resultados! Descubra o impacto dos creators e alcance novos patamares de sucesso.
                    </DashboardText> 
                    <ContentDashboardAction>
                        <Button primary onClick={() => navigate("dashboard/campaing/create")}>+ CRIAR CAMPANHA</Button>
                    </ContentDashboardAction>
                </Col>
            </Row> 
        </>
    );
}