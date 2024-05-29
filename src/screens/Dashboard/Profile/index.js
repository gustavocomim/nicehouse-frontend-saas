import React, { useContext } from "react";  
import { useHistory } from "react-router-dom";

import {  

    CardUserContainer,
    CardUserContainerHeader,
    CardUserContainerHeaderImage,
    CardUserContainerHeaderTitle,
    CardUserContainerBody,
    CardUserContainerBodyTitle,
    CardUserContainerBodyText,
    CardUserContainerBodyFooter,
    CardUserContainerBodyFooterItem,

} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";
import Button from "components/Form/Button";

import { CoreContext } from "context/CoreContext";
import { parseInitialize } from "utils/parsers";
import { parseStrapiImage } from "utils";


export default function DashboardProfile(){  

    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    const { user } = useContext(CoreContext)
 

    return ( 
        <>
            <ContainerAuthenticated side={3}>  
                    
                    <Row>
                        <Col lg={3}></Col>
                        <Col lg={6}>
                            <CardUserContainer>
                                <CardUserContainerHeader>
                                    <CardUserContainerHeaderImage image={user?.image?.url ? parseStrapiImage(user?.image?.url) : null} >{ user?.image ? null : parseInitialize(user?.name) }</CardUserContainerHeaderImage>
                                    <CardUserContainerHeaderTitle>{ user?.name }</CardUserContainerHeaderTitle>
                                </CardUserContainerHeader>
                                
                                <CardUserContainerBody>
                                    <CardUserContainerBodyTitle>Nome completo</CardUserContainerBodyTitle>
                                    <CardUserContainerBodyText>{ user?.name }</CardUserContainerBodyText>

                                    <CardUserContainerBodyTitle>E-mail de contato</CardUserContainerBodyTitle>
                                    <CardUserContainerBodyText>{ user?.email }</CardUserContainerBodyText>
                                    
                                    <CardUserContainerBodyTitle>Telefone de contato</CardUserContainerBodyTitle>
                                    <CardUserContainerBodyText>{ user?.phone }</CardUserContainerBodyText>

                                    <CardUserContainerBodyFooter>
                                        <CardUserContainerBodyFooterItem>
                                            <Button primary onClick={() => navigate("dashboard/profile/edit")}>EDITAR</Button>
                                        </CardUserContainerBodyFooterItem>
                                    </CardUserContainerBodyFooter>
                                </CardUserContainerBody>

                            </CardUserContainer>
                        </Col>
                        <Col lg={3}></Col>
                    </Row>

            </ContainerAuthenticated> 
        </>
    );
}