import React, { useContext, useState } from "react";   
import { useHistory } from "react-router-dom";

import { 

    ContentHeaderMenu,
    ContentHeaderMenuIcon,
    ContentHeaderMenuDecoration,
    ContentHeaderMenuDecorationText,
    ContentHeaderMenuContainer,

    HeaderMenuContainer,
    HeaderMenuItem,
    HeaderMenuItemIcon,
    HeaderMenuItemText

} from "./styled"; 

import { DoLogout } from "services/authentication";
import { parseInitialize } from "utils/parsers";
import { CoreContext } from "context/CoreContext";
import { parseStrapiImage } from "utils";

export default function DashboardHeaderMenu({  }){  
    
    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 

    const { user } = useContext(CoreContext)

    const [opened, setOpened] = useState(false) 

    const exit = async () => {
        setOpened(false)
        await DoLogout()
        navigate('login')
    }

    return ( 
        <> 
            <ContentHeaderMenuContainer>
                <ContentHeaderMenu onClick={() => setOpened(!opened)}>
                    <ContentHeaderMenuIcon opened={opened} />
                    <ContentHeaderMenuDecoration image={user?.image?.url ? parseStrapiImage(user?.image?.url) : null}>
                        <ContentHeaderMenuDecorationText>{user?.image ? null : parseInitialize(user?.name)}</ContentHeaderMenuDecorationText>
                    </ContentHeaderMenuDecoration>
                </ContentHeaderMenu>
                {
                    !opened ? null : 
                    <HeaderMenuContainer>
                        <HeaderMenuItem onClick={exit}>
                            <HeaderMenuItemIcon />
                            <HeaderMenuItemText>Sair</HeaderMenuItemText>
                        </HeaderMenuItem>
                    </HeaderMenuContainer>
                }
            </ContentHeaderMenuContainer>
        </>
    );
}