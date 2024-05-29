import styled from 'styled-components'  

import {
    Animation, DecoratedScroll
} from 'ui/styled'



export const CardExpandContainer = styled.div.attrs({ 
})`
    margin: 16px 0 0;
    border-radius: 8px;
    background: ${ props => props.theme.palette.colors.white };
    box-shadow: 0px 3px 6px ${ p => p.theme.palette.colors.shadow };
    ${
        p => p.closeable? `
            margin: 0 ;
            border-radius: 0;
        ` : ``
    }
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
export const CardExpandContainerHeaderIcon = styled.div.attrs({ 
})`
    background: url('/images/support.png') no-repeat center center / cover ;
    width: 56px;
    height: 56px;
    border-radius: 28px;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const CardExpandContainerHeaderIconDecoration = styled.div.attrs({ 
})`
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background: ${ p => p.theme.palette.colors.green };
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


export const ModalContainerHeaderButton = styled.div.attrs(p => ({ 
}))`
`;

export const ModalContainerHeaderButtonIcon = styled.img.attrs(p => ({ 
    src:`/icons/${ p.icon }.svg`
}))`
`;
