import styled from 'styled-components'  

import {
    Animation
} from 'ui/styled'












export const CardHomeContent = styled.div.attrs({ 
})`
    width: 100%;
    margin: 16px 0 0;
    padding: 16px 24px;
    border-radius: 16px;
    background: ${ props => props.theme.palette.colors.white };

    box-shadow: 0px 3px 6px ${ p => p.theme.palette.colors.shadow };
`;
export const CardHomeContentHeader = styled.div.attrs({ 
})`
    display: flex;
    justify-content: flex-end;
    padding: 0 0 12px;
`;
export const CardHomeContentLabel = styled.div.attrs({ 
})`
    padding: 4px 16px 4px 8px;
    background: ${ props => props.isSuccess ? props.theme.palette.colors.green : props.theme.palette.colors.blue };
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
    min-height: 22px;
`;


export const CardHomeContentBodyActions = styled.div.attrs({ 
})`
    padding: 8px 0 0;
    display: flex;
`;

export const CardHomeContentBodyAction = styled.div.attrs({ 
})`
`;