import React, { useEffect } from "react";  
import { useHistory } from 'react-router-dom';


import { Row, Col, Container } from 'reactstrap';   
import { ReadObject } from "services/storage"; 
import { ThemedComponent } from "ui/theme";

import {
    SideBackgroundImageContainer,
    SideBackgroundImage,
    SideBackgroundImageDegree,

    FormContent,
    AppLogo,
    Content,
    Touch
} from './styled'
 

export default function ContainerUnauthenticated({ children, keep }){   
    
    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    const init = () => {
        const authentication = ReadObject('authentication')
        if (authentication?.jwt && !keep) {
            completeNext()
        }
    }
 
    const completeNext = () => {
        navigate('dashboard')
    }

    useEffect(() => {  
        init()
        window.scrollTo(0,0)
    }, [])

    return ( 
        <> 
            <ThemedComponent> 
                <Content>
                    <Container>
                        <Row>
                            <Col md={{ offset:2, size:8 }}>
                                <FormContent>
                                    { children }
                                </FormContent>
                            </Col>
                        </Row>  
                    </Container>
                </Content> 
            </ThemedComponent>
        </>
    );
}