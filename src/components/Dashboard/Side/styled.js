import styled from 'styled-components'   

export const DashboardMenuContainer = styled.div.attrs({ 
})`            
    margin: 0 20px;
    border-radius: 10px;
    background: ${ props => props.theme.palette.colors.white }; 
 
    @media(max-width: 767px){
        margin: 0 auto 20px; 
        width: 100%;
        max-width: 540px;
    } 
`;

export const DashboardMenu = styled.div.attrs({ 
    className:'menu-contant'
})`           
    
    padding: 4px 4px 2px;
    border-radius: 4px ;

    box-shadow: 0px 3px 6px ${ p => p.theme.palette.colors.shadow };


    @media(max-width: 767px){
        display: flex ;
        flex-wrap: wrap;
        width: 100%;
    }


    

`;

export const SidemenuItem = styled.div.attrs({ 
})` 
    min-width: 66px;
    height: 66px;
    border-radius: 6px;
    margin: 0 0 4px 0;
    
    background: linear-gradient(95deg, ${props => props.theme.palette.colors.degradeprimary} 0%, ${props => props.theme.palette.colors.degradesecondary} 87%, ${props => props.theme.palette.colors.degradesecondary} 100%);

    ${
        p => !p.active ? `
            background: transparent;
        ` : ``
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    &:hover{
        opacity; .7;
    }

    @media(max-width: 767px){
        flex:1;
    }
`;

export const SidemenuItemIcon = styled.img.attrs(p => ({
    src: `/icons/${ p.icon }-${ p.active ? `on` : `off` }.svg`,
    width: 24
}))` 
    margin-bottom: 4px;
`;

export const SidemenuItemText = styled.div.attrs({ 
})` 
    font-size: 11px;
    font-weight: 500;
    color: ${ props => props.theme.palette.colors.white };

    ${
        p => !p.active ? `
            color: ${ p.theme.palette.colors.text };
        ` : ``
    }
`;