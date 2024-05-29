import React, { useState } from "react";  
import { useHistory } from "react-router-dom";

import {  

    DashboardTitle,
    DashboardText,
    
    CardHomeContentBodyAction,

    BodyHeader,
    BodyHeaderInfo,

} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";
import Button from "components/Form/Button";
import EmptyPage from "components/EmptyPage";
import CardHome from "components/Cards/Home"; 
import CampaingTabs from "components/Dashboard/Campaing/Tabs";

import useCampaing from "hooks/useCampaing";
import { Load } from "ui/styled";


export default function DashboardCampaing(){  

    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    const [active, setActive] = useState(0)

    const { campaings, empty, loading } = useCampaing()


    const LINE_SIZE = 3

    const tabs = [
        { title:"Todas" },
        { title:"Andamento" },
        !campaings?.filter(f => "Finalizada" === f?.label)?.length ? null : { title:"Finalizada" },
    ]?.filter(f => f)

    const filterTab = item => {
        return (tabs?.[active]?.title === "Todas") || tabs?.[active]?.title === item?.label
    }

    return ( 
        <>
            <ContainerAuthenticated side={1}> 
                { !loading ? null : <Load colored centred /> }
                { !empty || loading ? null : <EmptyPage /> }
                { 
                    empty ? null : <>

                        <BodyHeader>
                            <BodyHeaderInfo>
                                <DashboardTitle small={!empty}> Campanhas </DashboardTitle> 
                                <DashboardText> Escolha o tipo de campanha que você gostaria de criar! </DashboardText> 
                            </BodyHeaderInfo>
                            <CardHomeContentBodyAction>
                                <Button onClick={() => navigate("dashboard/campaing/create")} primary>+ CRIAR CAMPANHA</Button>
                            </CardHomeContentBodyAction>
                        </BodyHeader>

                        <CampaingTabs tabs={tabs} active={active} setActive={setActive} />

                        {
                            [ ...(new Array( Math.ceil( campaings?.filter(filterTab)?.length / LINE_SIZE  ) )) ].map((line, lineKey) => 
                                <Row key={lineKey}>
                                    {
                                        campaings?.filter(filterTab)?.slice((lineKey * LINE_SIZE), ( (lineKey + 1) * LINE_SIZE ) )?.map((item, key) => 
                                            <Col key={ `${lineKey}-${key}` } md={"4"}>
                                                <CardHome { ...item } />
                                            </Col>
                                        )
                                    }
                                </Row>
                            )
                        }

                    </> 
                }
            </ContainerAuthenticated> 
        </>
    );
}