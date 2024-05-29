import styled from 'styled-components'  

import {
    Animation
} from 'ui/styled'

export const DashboardTitle = styled.div.attrs({ 
})`            
    font-size: 40px;
    color: ${ props => props.theme.palette.colors.black };
    margin-top: 50px;
    margin-bottom: 12px;
    
    ${
        props => props.centred ? `
            text-align: center;
        ` : ``
    }

    ${
        props => props.small ? `
            font-size: 24px;
        ` : ``
    }

    @media(max-width: 987px){
        margin-top: 20px;
    }

    @media(max-width: 767px){
        margin-top: 50px;
    }
`;

export const DashboardText = styled.div.attrs({ 
})`            
    font-size: 16px;
    line-height: 24px;
    color: ${ props => props.theme.palette.colors.black };
    ${
        props => props.centred ? `
            text-align: center;
        ` : ``
    }
`;

export const BodyHeader = styled.div.attrs({ 
})`
    padding: 0 0 6px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;
export const BodyHeaderInfo = styled.div.attrs({ 
})`
`;

export const CardHomeContentBodyAction = styled.div.attrs({ 
})`
`;








export const CardExpandContainer = styled.div.attrs({ 
})`
    margin: 16px 0 0;
    border-radius: 8px;
    background: ${ props => props.theme.palette.colors.white };
    box-shadow: 0px 3px 6px ${ p => p.theme.palette.colors.shadow };
`;
export const CardExpandContainerHeader = styled.div.attrs({ 
})`
    display: flex;
    gap: 12px;
    padding: 16px;

    cursor: pointer;

    border-bottom: 1px solid ${ props => props.theme.palette.colors.borderline };

`;
export const CardExpandContainerHeaderIcon = styled.img.attrs({ 
    src: '/icons/chevron.svg'
})`
`;
export const CardExpandContainerHeaderTitle = styled.div.attrs({ 
})`
    flex:1;
`;
export const CardExpandContainerHeaderLabel = styled.div.attrs({ 
})`
    padding: 4px 8px;
    border-radius: 32px;
    background: ${ props => props.theme.palette.colors.blue };

    display: flex;
    align-items: center;
    gap: 8px;
`;
export const CardExpandContainerHeaderLabelDecoration = styled.div.attrs({ 
})`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: ${ props => props.theme.palette.colors.white };
`;
export const CardExpandContainerHeaderLabelText = styled.div.attrs({ 
})`
    font-size: 14px;
    color: ${ props => props.theme.palette.colors.white };
`;
export const CardExpandContainerBody = styled.div.attrs({ 
})`
    padding: 16px;
`;



export const CardExpandTitle = styled.div.attrs({ 
})`
    font-size: 16px;
    color: ${ props => props.theme.palette.colors.black };
`;

export const CardExpandText = styled.div.attrs({ 
})`
    font-size: 14px;
    color: ${ props => props.theme.palette.colors.text };
    margin: 0 0 16px 0;
    ${
        p => p.link ? `
            cursor: pointer;
            color: ${ p.theme.palette.secondary.main };
            &:hover{
                text-decoration: underline; 
            }
        ` : ``
    }
`;








export const CardExpandContainerHeaderToggle = styled.div.attrs({ 
})`
    display: flex;
`;
export const CardExpandContainerHeaderToggleItem = styled.div.attrs({ 
})`
    padding: 8px 16px;
    border: 1px solid ${ props => props.active ? props.theme.palette.colors.disabledgrey : props.theme.palette.colors.borderline };

    display: flex;
    align-items: center;
    gap: 12px;

    cursor: pointer;

    &:first-child{
        border-top-left-radius: 32px;
        border-bottom-left-radius: 32px;
        padding-left: 24px;
    }

    &:last-child{
        border-top-right-radius: 32px;
        border-bottom-right-radius: 32px;
        padding-right: 24px;
    }
`;
export const CardExpandContainerHeaderToggleItemIcon = styled.img.attrs(p => ({
    src: `/icons/${ p.icon }.svg`,
    width: 16
}))`
    ${ p => !p.active ? `
        opacity: .3;
    ` : ``}
`;
export const CardExpandContainerHeaderToggleItemText = styled.div.attrs({ 
})`
    color: ${ props => !props.active ? props.theme.palette.colors.disabledgrey : props.theme.palette.colors.text };
`;











export const CardGalleryContent = styled.div.attrs({ 
})`
    background: ${ p => p.theme.palette.colors.white };
    box-shadow: 0px 3px 6px ${ p => p.theme.palette.colors.shadow };
`;
export const CardGalleryImage = styled.div.attrs({ 
})`
    width: 100%;
    height: 320px;
    background: ${ p => p.theme.palette.colors.borderline } url(${ p => p.image }) no-repeat center center / cover;
`;
export const CardGalleryBody = styled.div.attrs({ 
})`
    margin: 16px 16px 0;
    border-top: 1px solid ${ p => p.theme.palette.colors.borderline };
    padding: 16px 0;
`;
export const CardGalleryBodyStatus = styled.div.attrs({ 
})`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
`;
export const CardGalleryBodyStatusIcon = styled.img.attrs(p => ({ 
    width: 16,
    src: `/icons/${p.icon}.svg`
}))`
`;
export const CardGalleryBodyStatusText = styled.div.attrs({ 
})`
    font-size: 14px;
    color: ${ props => props.theme.palette.colors.green };
`;
export const CardGalleryBodyText = styled.div.attrs({ 
})`
    font-size: 14px;
    color: ${ props => props.theme.palette.colors.text };
`;
export const CardGalleryBodyActions = styled.div.attrs({ 
})`    
    padding: 16px 0;
    display: flex;
    gap: 16px;
`;




export const CardEmptyContainer = styled.div.attrs({ 
})`
    background: ${ p => p.theme.palette.colors.white };
    box-shadow: 0px 3px 6px ${ p => p.theme.palette.colors.shadow };
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    border-radius: 16px;
`;
export const CardEmptyImage = styled.img.attrs({ 
    src: '/images/lary.png'
})`
    width: 100%;
    max-width: 330px;
    height: 330px;
    margin: 0 0 32px;
`;
export const CardEmptyTitle = styled.div.attrs({ 
})`
    font-size: 20px;
    color: ${ props => props.theme.palette.colors.black };
    margin: 0 0 12px;
`;
export const CardEmptyText = styled.div.attrs({ 
})`
    font-size: 14px;
    color: ${ props => props.theme.palette.colors.text };
    text-align: center;
    max-width: 800px;
    margin: 0 0 32px;
`;