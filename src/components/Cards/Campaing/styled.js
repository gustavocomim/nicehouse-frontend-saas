import styled from 'styled-components'  

import {
    Animation
} from 'ui/styled'












export const CardHomeContent = styled.div.attrs({ 
})`
    width: 100%;
    margin: 16px 0 0;
    padding: 16px 16px;
    border-radius: 16px;
    background: ${ props => props.theme.palette.colors.white };

    box-shadow: 0px 3px 6px ${ p => p.theme.palette.colors.shadow };
`;



export const CardHomeImage = styled.div.attrs({ 
})`
    width: 100%;
    height: 187px;
    padding: 16px 16px;
    margin: 0 0 16px;
    border-radius: 8px;

    background: url(${ p => p.image }) no-repeat center center / cover;
`;
export const CardHomeContentHeader = styled.div.attrs({ 
})`
    display: flex;
    justify-content: flex-end;
`;
export const CardHomeContentLabel = styled.div.attrs({ 
})`
    padding: 4px 8px 4px 8px;
    background: ${ props => props.theme.palette.colors.black };
    border-radius: 32px;
    display: flex;
    align-items: center;
`;
export const CardHomeContentLabelDecoration = styled.div.attrs({ 
})`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    margin: 0 8px 0 0;
    background: ${ props => props.theme.palette.colors.white };
`;
export const CardHomeContentLabelText = styled.div.attrs({ 
})`
    font-size: 14px;
    color: ${ props => props.theme.palette.colors.white };
`;
export const CardHomeContentBody = styled.div.attrs({ 
})`
    padding: 0 8px;
`;
export const CardHomeContentBodyTitle = styled.div.attrs({ 
})`
    font-size: 18px;
    color: ${ props => props.theme.palette.colors.black };
`;
export const CardHomeContentBodyText = styled.div.attrs({ 
})`
    font-size: 14px;
    color: ${ props => props.theme.palette.colors.text };
    margin: 8px 0 16px;
`;
export const CardHomeContentBodyDate = styled.div.attrs({ 
})`
    font-size: 12px;
    color: ${ props => props.theme.palette.colors.black };
`;


export const CardHomeContentBodyActions = styled.div.attrs({ 
})`
    padding: 8px 0 0;
`;

export const CardHomeContentBodyAction = styled.div.attrs({ 
})`
`;

export const CardHomeWrapperBody = styled.div.attrs({ 
})`
    ${
        p => p.disabled ? `
            opacity: .3;
        ` : ``
    }
`;