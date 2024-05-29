import styled from 'styled-components'  


export const ModalContainer = styled.div.attrs({ 
})`
    position: absolute;
    inset: 0 0 0 0;
    background: ${ props => props.theme.palette.colors.darkshadow };
    z-index:1;
`;

export const ModalContainerHeader = styled.div.attrs({ 
})`
    width: 100%;
    height: 72px;
    background: ${ props => props.theme.palette.colors.blacked };
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ModalContainerHeaderLogo = styled.img.attrs({ 
    src:'/images/logo-white.png'
})`
`;

export const ModalContainerHeaderActions = styled.div.attrs({ 
})`
    display: flex;
    gap: 12px;
`;

export const ModalContainerHeaderButtonIcon = styled.img.attrs(p => ({ 
    src:`/icons/${ p.icon }.svg`
}))`
`;

export const ModalContainerHeaderActionIcon = styled.img.attrs(p => ({ 
    src:`/icons/${ p.icon }.svg`
}))`
    margin: 0 6px 0 0;
`;

export const ModalContainerBodyContainer = styled.div.attrs({ 
})`
    height: calc(100% - 72px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContainerBody = styled.div.attrs({ 
})`
    min-height: 70vh;
    max-height: 80vh;
    height: 100%;
    width: 100%;
    max-width: 940px;
    margin: 0 12px;
    border-radius: 16px;
    overflow: hidden;
`;