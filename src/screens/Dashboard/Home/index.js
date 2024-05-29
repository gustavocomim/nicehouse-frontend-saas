import React from "react";  

import { useHistory } from "react-router-dom";

import {  

    DashboardTitle,
    DashboardText,
    ContentDashboardAction,
    BodyPanel,
    BodyIllustration,

    BodyHeader,
    BodyHeaderInfo,
    BodyHeaderLink

} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";
import Button from "components/Form/Button";
import EmptyPage from "components/EmptyPage";
import CardHome from "components/Cards/Home";

import useCampaing from "hooks/useCampaing";
import { Load } from "ui/styled";

export default function DashboardHome(){  

    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    const { campaings, empty, loading } = useCampaing()
    
    return ( 
        <>
            <ContainerAuthenticated side={0}> 
                { !loading ? null : <Load colored centred /> }
                { !empty || loading ? null : <EmptyPage /> }
                { 
                    empty ? null : <>
                    
                        <BodyPanel>
                            <Row>
                                <Col md={4}>
                                    <BodyIllustration />
                                </Col>
                                <Col>
                                    <DashboardTitle small={!empty}>
                                        Transforme sua marca com pessoas autênticas
                                    </DashboardTitle> 
                                    <DashboardText>
                                        Dê um passo ousado para ampliar seus resultados! Descubra o impacto dos creators e alcance novos patamares de sucesso.
                                    </DashboardText> 
                                    <ContentDashboardAction>
                                        <Button primary onClick={() => navigate("dashboard/campaing/create")} >+ CRIAR CAMPANHA</Button>
                                    </ContentDashboardAction>
                                </Col>
                            </Row>
                        </BodyPanel>

                        <BodyHeader>
                            <BodyHeaderInfo>
                                <DashboardTitle small={!empty}> Campanhas recentes </DashboardTitle> 
                                <DashboardText> Acompanhe as suas campanhas mais recentes aqui. </DashboardText> 
                            </BodyHeaderInfo>
                            <BodyHeaderLink onClick={() => navigate("dashboard/campaing")}>Ver todas</BodyHeaderLink>
                        </BodyHeader>

                        <Row>
                            {
                                campaings?.slice(0,3)?.map((item, key) => 
                                    <Col key={key} md={"4"}>
                                        <CardHome { ...item } />
                                    </Col>
                                )
                            }
                        </Row>

                    </> 
                }
            </ContainerAuthenticated> 
        </>
    );
}