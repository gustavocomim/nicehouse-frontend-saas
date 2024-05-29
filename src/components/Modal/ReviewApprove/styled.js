import { hexToRgb } from 'ui/styled';
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

export const ModalContainerHeaderActionIcon = styled.img.attrs(p => ({ 
    src:`/icons/${ p.icon }.svg`
}))`
    margin: 0 6px 0 0;
`;

export const ContainerVideoHeaderButtonIcon = styled.img.attrs(p => ({ 
    width: 16,
    src: `/icons/${p.icon}.svg`
}))`
    margin: 0 8px 0 0;
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
    max-width: 768px;
    margin: 0 12px;
`;





export const ContainerVideo = styled.div.attrs({ 
})`
    height: 100%;
    background: ${ p => p.theme.palette.colors.backgroundgrey } url(${ p => p.image }) no-repeat center center / cover;
    padding: 16px;

    display: flex;
    flex-direction: column;

    position: relative;
    
`;

export const ContainerVideoVideo = styled.video.attrs({ 
})`
    width: 100%;
    min-height: 100%;
    background: ${ p => p.theme.palette.colors.borderline } url(${ p => p.image }) no-repeat center center / cover;
    position: absolute;
    object-fit: cover;
    inset: 0 0 0 0;
`;

export const ContainerVideoHeader = styled.div.attrs({ 
})`
    display: flex;
    justify-content: space-between;
    z-index:1;
`;
export const ContainerVideoAction = styled.div.attrs({ 
})`
`;

export const ContainerVideoBody = styled.div.attrs({ 
})` 
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContainerVideoBodyAction = styled.div.attrs({ 
})`

    display: flex; 
    align-items: center;
    justify-content: center;

    width: 80px;
    height: 80px;
    border-radius: 40px;
    background: rgba( ${ p => hexToRgb(p.theme.palette.colors.degradesecondary) } , .8);

    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        transform: scale(1.05);
    }
`;

export const ContainerVideoBodyActionIcon = styled.img.attrs(p => ({ 
    width: 26,
    src: `/icons/${p.icon}.svg`
}))`
`;

export const ContainerVideoFooter = styled.div.attrs({ 
})`
    padding: 16px;
`;


export const ContainerVideoFooterProgress = styled.div.attrs({ 
})`
    border-radius: 24px;
    padding: 16px 21px;
    background: ${ p => p.theme.palette.colors.shadow } ;

    display: flex;
    align-items: center;
    gap: 12px;
`;
export const ContainerVideoFooterProgressText = styled.div.attrs({ 
})` 
    font-size: 14px;
    color: ${ p => p.theme.palette.colors.white } ;
`;
export const ContainerVideoFooterProgressLine = styled.div.attrs({ 
})`
    flex:1;
    height: 4px;
    border-radius: 2px;
    background: ${ p => p.theme.palette.colors.white } ;
    display: flex;
    position: relative;
`;
export const ContainerVideoFooterProgressLineDecoration = styled.div.attrs({ 
})`
    height: 4px;
    width: 40%;
    border-radius: 2px;
    background-image: linear-gradient(95deg, ${props => props.theme.palette.colors.degradeprimary} 0%, ${props => props.theme.palette.colors.degradesecondary} 87%, ${props => props.theme.palette.colors.degradesecondary} 100%);
`;
export const ContainerVideoFooterProgressLineIndicator = styled.div.attrs({ 
})`
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background: ${ p => p.theme.palette.colors.degradesecondary };
    margin: -6px;
    left: 20%;
`;

