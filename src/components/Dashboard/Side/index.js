import React, { useState } from "react";  

import { useHistory } from 'react-router-dom';

import {  

    DashboardMenuContainer,
    DashboardMenu,
    

    SidemenuItem,
    SidemenuItemIcon,
    SidemenuItemText,

} from "./styled"; 

import Button from "components/Form/Button";
import { DoLogout } from "services/authentication";
import { Container } from "reactstrap";

export default function DashboardSide({ opened, setOpened, active }){ 
    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 
    
    const verifyClose = e => {
        if(!e.target.closest('.menu-contant')){
            setOpened(false)
        }
    }
 

    const sideOptions = [
        { title:"Home", icon:"menu1", action: () => navigate("dashboard") },
        { title:"Campanhas", icon:"menu2", action: () => navigate("dashboard/campaing") },
        { title:"Suporte", icon:"menu3", action: () => navigate("dashboard/support") },
        { title:"Perfil", icon:"menu4", action: () => navigate("dashboard/profile") },
    ]

    const exit = async () => {
        await DoLogout()
        navigate('login')
    }

    return ( 
        <>   
            <DashboardMenuContainer onClick={verifyClose}>
                <DashboardMenu> 
                    
                    {
                        sideOptions?.map((item, key) => 
                            <SidemenuItem key={key} active={key === active} onClick={item.action}>
                                <SidemenuItemIcon active={key === active} icon={item?.icon} />
                                <SidemenuItemText active={key === active}>{ item?.title }</SidemenuItemText>
                            </SidemenuItem>
                        )
                    }
                    
                </DashboardMenu>
            </DashboardMenuContainer>
        </>
    );
}