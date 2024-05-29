import styled from 'styled-components'  

import {
    Animation, DecoratedScroll
} from 'ui/styled'

export const DashboardImage = styled.img.attrs({ 
    src:"/images/saly.png"
})`
    width: 100%;
    max-width: 640px;
    margin: 0 auto 32px;
`;

export const DashboardTitle = styled.div.attrs({ 
})`            
    font-size: 40px;
    color: ${ props => props.theme.palette.colors.black };
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
    margin-bottom: 12px;
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
    align-items: center;
    gap: 12px;
    padding: 16px;

    cursor: pointer;

    border-bottom: 1px solid ${ props => props.theme.palette.colors.borderline };

`;
export const CardExpandContainerHeaderIcon = styled.img.attrs({ 
    src: '/images/support.png',
    width: 56
})`
`;

export const CardExpandContainerHeaderContent = styled.div.attrs({ 
})`
    flex:1;
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
    margin: 0 0 6px 0;
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






export const CardExpandContainerBody = styled(DecoratedScroll).attrs({ 
})`
    padding: 16px;
    min-height: 58vh;
    max-height: 58vh;
    border-bottom: 1px solid ${ props => props.theme.palette.colors.borderline };

    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const CardExpandContainerActions = styled.div.attrs({ 
})`
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 16px;
`;

export const CardExpandContainerAction = styled.div.attrs({ 
})`
    max-width: 140px;
    width: 100%;
`;








export const CardChatDate = styled.div.attrs({ 
})`
    padding: 4px 12px;
    border-radius: 32px;
    background: linear-gradient(95deg, ${props => props.theme.palette.colors.degradeprimary} 0%, ${props => props.theme.palette.colors.degradesecondary} 87%, ${props => props.theme.palette.colors.degradesecondary} 100%);
    margin: 0 auto;
    display: flex;
    gap: 6px;
`;
export const CardChatDateIcon = styled.img.attrs({ 
    width: 16,
    src:'/icons/clock.svg'
})`
`;
export const CardChatDateText = styled.div.attrs({ 
})`
    color: ${ props => props.theme.palette.colors.white };
`;

export const CardChatSpacer = styled.div.attrs({ 
})`
    flex:1;
`;
export const CardChatBallon = styled.div.attrs({ 
})`
    padding: 16px;
    background: ${ props => props.me ? props.theme.palette.colors.lightprimary : props.theme.palette.colors.white };
    box-shadow: 0px 3px 6px ${ p => p.theme.palette.colors.shadow };

    border-radius: 24px;
    ${
        p => p.me ? `
            border-bottom-right-radius: 0;
            align-self: flex-end;
        ` : `
            border-bottom-left-radius: 0;
        `
    }

    max-width: 70%;
`;
export const CardChatBallonText = styled.div.attrs({ 
})`
    max-width: 70%
`;
export const CardChatBallonBottom = styled.div.attrs({ 
})`
    display: flex;
    justify-content: flex-end;
`;
export const CardChatBallonBottomItem = styled.div.attrs({ 
})`
    display: flex;
    align-items: center;
    gap: 4px;
`;
export const CardChatBallonBottomItemIcon = styled.img.attrs({ 
    width: 16,
    src: '/icons/check-chat.svg'
})`
`;
export const CardChatBallonBottomItemText = styled.div.attrs({ 
})`
`;

