import React, { useCallback, useEffect } from "react";  
 
import Header from 'components/Dashboard/Header'  
  
import { 
    DashboardPage,
    DashboardBody,
    DashboardBodyContent,
    Content
} from "./styled";
import { ReadObject } from "services/storage";
import { useHistory } from "react-router-dom";
import { ThemedComponent } from "ui/theme";
import { Container } from "reactstrap";
import DashboardSide from "components/Dashboard/Side";
import { useIntercom } from "react-use-intercom";

export default function ContainerAuthenticated({ children, fluid, side, actions, loading }){  

    const history = useHistory();
    const navigate = useCallback(to => history.push(`/${ to }`), [history]);

    const { boot } = useIntercom()

    const completeNext = useCallback(() => {
        navigate('login')
    }, [navigate])

    const init = useCallback(() => {
        const authentication = ReadObject('authentication')
        if (!authentication?.jwt) {
            completeNext()
        }
    }, [completeNext])

    useEffect(() => {  
        init(); boot();
        window.scrollTo(0,0)
    }, [init, boot])

    return ( 
        <>
            <ThemedComponent>
                <Content>
                    <DashboardPage>
                        <Header actions={actions} loading={loading}/> 
                        <DashboardBody> 
                            <DashboardBodyContent>                     
                                <DashboardSide active={side} />
                                <Container fluid={fluid}>
                                    { children }
                                </Container>
                            </DashboardBodyContent>
                        </DashboardBody>  
                    </DashboardPage> 
                </Content>
            </ThemedComponent>
        </>
    );
}