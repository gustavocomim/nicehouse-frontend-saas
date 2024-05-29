import React, { useMemo, useState } from "react";  
import { useHistory } from "react-router-dom";

import {  

    CardHomeContentBodyAction,

    CardExpandContainer,
    CardExpandContainerHeader,
    CardExpandContainerHeaderTitle,
    
    CardExpandContainerBody,
    CardExpandTitle,
    CardExpandText,

    CardExpandContainerHeaderToggle,
    CardExpandContainerHeaderToggleItem,
    CardExpandContainerHeaderToggleItemIcon,
    CardExpandContainerHeaderToggleItemText,

} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";
import Button from "components/Form/Button";

import CampaingTabs from "components/Dashboard/Campaing/Tabs";
import CampaingHeaderBread from "components/Dashboard/Campaing/HeaderBread";
import CardAccordeon from "components/Cards/Accordeon";
import CardAssets from "components/Cards/Assets";
import { galleryContent, moods } from "utils/mock";
import CardContentType from "components/Cards/ContentType";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import CardKnowing from "components/Cards/Knowing";
import CardGallery from "components/Cards/Gallery";
import CardEmpty from "components/Cards/CardEmpty";
import useCampaing from "hooks/useCampaing";



export default function DashboardCampaingDetails(){  

    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    const { id } = useParams()

    const { currentCampaing, empty, reload, removeAsset } = useCampaing()

    const [active, setActive] = useState(0)
    const [deliverableActive, setDeliverableActive] = useState(0)

    const LINE_SIZE = 3

    // const currentCampaing = useMemo(() => {
    //     return campaings?.find(f => `${f.id}` === `${id}`)
    // }, [campaings, id])

    const tabs = [
        { title:"Configurações" },
        { title:"Entregáveis" }
    ]

    const deliverableTabs = [
        { title:"Lista", icon:"list" },
        { title:"Galeria", icon:"galery" }
    ]

    return ( 
        <>
            <ContainerAuthenticated side={1}>  

                        <CampaingHeaderBread title={ currentCampaing?.title } bread={["Campanhas", currentCampaing?.title]}  >
                            <CardHomeContentBodyAction>
                                <Button onClick={() => navigate(`dashboard/campaing/edit/${ id }`)} primary>EDITAR CAMPANHA</Button>
                            </CardHomeContentBodyAction>
                        </CampaingHeaderBread> 

                        <CampaingTabs tabs={tabs} active={active} setActive={setActive} />
                        {
                            active === 0 ? <>
                                <CardAccordeon title={"Informações do negócio"} label={currentCampaing?.label}>
                                    
                                    <CardExpandTitle>Nome da empresa</CardExpandTitle>
                                    <CardExpandText>{ currentCampaing?.company_company }</CardExpandText>
                                    
                                    <CardExpandTitle>E-mail de contato</CardExpandTitle>
                                    <CardExpandText>{ currentCampaing?.company_email }</CardExpandText>

                                    <CardExpandTitle>Telefone de contato</CardExpandTitle>
                                    <CardExpandText>{ currentCampaing?.company_phone }</CardExpandText>

                                    <CardExpandTitle>Descreva brevemente seu produto ou marca</CardExpandTitle>
                                    <CardExpandText>{ currentCampaing?.company_brand_description }</CardExpandText>

                                </CardAccordeon>

                                <CardAccordeon title={"Detalhes do projeto"}>
                                    
                                    { currentCampaing?.type === "video-commerce" ? <>
                                        <CardKnowing preview />
                                    </> : null }

                                    <CardExpandTitle>Nome da campanha</CardExpandTitle>
                                    <CardExpandText>{ currentCampaing?.name }</CardExpandText>
                                    
                                    <CardExpandTitle>Objetivo da campanha</CardExpandTitle>
                                    <CardExpandText>{ currentCampaing?.campaign_objective }</CardExpandText>

                                    <CardExpandTitle>Público alvo</CardExpandTitle>
                                    <CardExpandText>{ currentCampaing?.target_audience }</CardExpandText>


                                    { currentCampaing?.type === "creative-ads" ? <>

                                        <CardExpandTitle>Mensagem principal</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.main_message }</CardExpandText>

                                        <CardExpandTitle>Expectativa de data de entrega</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.date }</CardExpandText>
                                        
                                    </> : null }

                                    { currentCampaing?.type === "pontual-campaing" ? <>

                                        <CardExpandTitle>Budget</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.campaing_budget }</CardExpandText>

                                        <CardExpandTitle>Prazo do pagamento</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.campaing_paymentDeadline }</CardExpandText>
                                        
                                        <CardExpandTitle>Duração da campanha</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.campaing_duration }</CardExpandText>

                                        <CardExpandTitle>Características dos criadores</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.campaing_characteristics }</CardExpandText>

                                        <CardExpandTitle>Tema central</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.campaing_campaingTheme }</CardExpandText>

                                        <CardExpandTitle>Mensagem principal</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.main_message }</CardExpandText>

                                        <CardExpandTitle>Indicadores de sucesso</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.campaing_indicator }</CardExpandText>

                                        <CardExpandTitle>Existe alguma restrição legal/ regulatória sobre essa campanha</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.campaing_restritions }</CardExpandText>

                                        { 
                                            !currentCampaing?.campaing_restritions_description ? null : <>
                                                <CardExpandText>{ currentCampaing?.campaing_restritions_description }</CardExpandText>
                                            </>
                                        }

                                        <CardExpandTitle>Do's</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.campaing_allowed }</CardExpandText>


                                        <CardExpandTitle>Dont's</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.campaing_notalloed }</CardExpandText>

                                    </> : null }

                                    { currentCampaing?.type === "video-commerce" ? <>

                                        <CardExpandTitle>Mensagem principal</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.main_message }</CardExpandText>

                                        <CardExpandTitle>Expectativa de data de entrega</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.date }</CardExpandText>

                                        <CardExpandTitle>Características dos criadores</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.campaing_characteristics }</CardExpandText>

                                        <CardExpandTitle>Especificidades do(s) produto(s) que devem estar no video</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.campaing_videoSpecs }</CardExpandText>

                                        <CardExpandTitle>Dont's</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.campaing_notalloed }</CardExpandText>

                                        <CardExpandTitle>Tom de voz do video</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.campaing_tom }</CardExpandText>

                                        <CardExpandTitle>Logística</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.campaing_logistic }</CardExpandText>

                                        <CardAssets title={"Produtos que vão ser vinculados aos vídeos"} showableAssets={currentCampaing?.assets} removeAsset={removeAsset} />

                                        <CardExpandTitle>Observações</CardExpandTitle>
                                        <CardExpandText>{ currentCampaing?.campaing_videoObs }</CardExpandText>

                                    </> : null }

                                </CardAccordeon>
                                
                                <CardAccordeon title={"Detalhes do conteúdo"}>
                                    <CardContentType item={currentCampaing?.mood} preview description={currentCampaing?.other_description} />
                                </CardAccordeon>
                                
                                <CardAccordeon title={"Informações adicionais"}>
                                    
                                    <CardExpandTitle>Site de empresa / Landing page</CardExpandTitle>
                                    <CardExpandText link>{ currentCampaing?.url_site_landing_page }</CardExpandText>
                                    
                                    <CardExpandTitle>Call-to-action (CTA)</CardExpandTitle>
                                    <CardExpandText>{ currentCampaing?.cta }</CardExpandText>

                                    <CardExpandTitle>Requerimento especial</CardExpandTitle>
                                    <CardExpandText>{ currentCampaing?.special_requirement }</CardExpandText>

                                    <CardAssets title={"Assets"} showableAssets={currentCampaing?.assets} removeAsset={removeAsset} />

                                </CardAccordeon>
                            </> : null
                        }

                        {
                            active === 1 ? <>
                                { !empty ? null : <CardEmpty /> }
                                {
                                    empty ? null : 
                                    <CardExpandContainer>
                                        <CardExpandContainerHeader>
                                            <CardExpandContainerHeaderTitle>Entregáveis da NiceHouse</CardExpandContainerHeaderTitle>
                                            
                                            <CardExpandContainerHeaderToggle>
                                                {
                                                    deliverableTabs?.map((item, key) => 
                                                        <CardExpandContainerHeaderToggleItem key={key} active={deliverableActive === key} onClick={() =>  setDeliverableActive(key)}>
                                                            <CardExpandContainerHeaderToggleItemIcon active={deliverableActive === key} icon={item?.icon} />
                                                            <CardExpandContainerHeaderToggleItemText active={deliverableActive === key} >{ item?.title }</CardExpandContainerHeaderToggleItemText>
                                                        </CardExpandContainerHeaderToggleItem>
                                                    )
                                                }
                                            </CardExpandContainerHeaderToggle>

                                        </CardExpandContainerHeader>
                                        <CardExpandContainerBody>
                                            { deliverableActive === 0 ? <CardAssets showableAssets={currentCampaing?.deliveries} /> : null }
                                            { 
                                                deliverableActive === 1 ? <>
                                                    {
                                                        [ ...(new Array( Math.ceil( currentCampaing?.deliveries?.length / LINE_SIZE  ) )) ].map((line, lineKey) => 
                                                            <Row key={lineKey}>
                                                                {
                                                                    currentCampaing?.deliveries?.slice((lineKey * LINE_SIZE), ( (lineKey + 1) * LINE_SIZE ) )?.map((item, key) => 
                                                                        <Col key={ `${lineKey}-${key}` }>
                                                                            <CardGallery { ...item } reload={reload} />
                                                                        </Col>
                                                                    )
                                                                }
                                                            </Row>
                                                        )
                                                    }
                                                </> : null 
                                            }
                                        </CardExpandContainerBody>
                                    </CardExpandContainer>
                                }

                            </> : null
                        }
            </ContainerAuthenticated> 
        </>
    );
}