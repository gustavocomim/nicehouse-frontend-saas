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










export const CardUserContainer = styled.div.attrs({ 
})`
    border-radius: 8px;
    background: ${ props => props.theme.palette.colors.white };
    box-shadow: 0px 3px 6px ${ p => p.theme.palette.colors.shadow };
`;
export const CardUserContainerHeader = styled.div.attrs({ 
})`
    padding: 24px 16px;
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 12px;
    
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background: linear-gradient(95deg, ${props => props.theme.palette.colors.degradeprimary} 0%, ${props => props.theme.palette.colors.degradesecondary} 87%, ${props => props.theme.palette.colors.degradesecondary} 100%);
`;
export const CardUserContainerHeaderImage = styled.div.attrs({ 
})`
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background: ${ props => props.theme.palette.colors.lightprimary } url(${p=>p.image}) no-repeat center center / cover;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 48px; 
    color: ${ props => props.theme.palette.colors.text };
`;
export const CardUserContainerHeaderTitle = styled.div.attrs({ 
})`
    text-align: center;
    font-size: 24px; 
    color: ${ props => props.theme.palette.colors.white };
`;
export const CardUserContainerBody = styled.div.attrs({ 
})`
    padding: 16px;
    border-bottom: 1px solid ${ props => props.theme.palette.colors.borderline };
`;
export const CardUserContainerBodyTitle = styled.div.attrs({ 
})`
    font-size: 16px; 
    color: ${ props => props.theme.palette.colors.black };
`;
export const CardUserContainerBodyText = styled.div.attrs({ 
})`
    font-size: 14px; 
    color: ${ props => props.theme.palette.colors.text };
    margin-bottom: 12px;
`;
export const CardUserContainerBodyFooter = styled.div.attrs({ 
})`
    padding: 16px 0 0;
    display: flex;
    justify-content: flex-end;
`;
export const CardUserContainerBodyFooterItem = styled.div.attrs({ 
})`
`;