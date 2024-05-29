import styled from 'styled-components'  


 
export const BodyHeaderInfo = styled.div.attrs({ 
})`
`; 








export const PanelForm = styled.div.attrs({ 
})`
    width: 100%;
    margin: 16px 0 0;
    padding: 32px;
    border-radius: 16px;
    background: ${ props => props.theme.palette.colors.white };

    box-shadow: 0px 3px 6px ${ p => p.theme.palette.colors.shadow };
`;










export const BodyPanel = styled.div.attrs({ 
})`
    display: flex;
    align-items: flex-start;
`;
export const BodyStepper = styled.div.attrs({ 
})`
    min-width: 210px;
    margin: 24px 0 0 32px;
    position: relative;
`;
export const BodyStepperDecoration = styled.div.attrs({ 
})`
    position: absolute;
    background: ${ p => p.theme.palette.colors.disabledgrey };
    width: 1px;
    top: 12px;
    bottom: 32px;
    left: 14px;
    z-index: 0;
`;
export const BodyStepperItem = styled.div.attrs({ 
})`
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 0;
    margin: 0 0 22px 0;
    z-index: 1;
`;
export const BodyStepperItemDecoration = styled.div.attrs({ 
})`
    min-width: 28px;
    min-height: 28px;
    border-radius: 14px;
    border: 1px solid ${ props => props.active ? props.theme.palette.colors.green : props.theme.palette.colors.black };
    background: ${ props => props.active ? props.theme.palette.colors.green : props.theme.palette.colors.black };

    font-size: 14px;
    color: ${ p => p.theme.palette.colors.white };

    display: flex;
    align-items: center;
    justify-content: center;

    ${
        p => p.disabled ? `
            color: ${ p.theme.palette.colors.disabledgrey };
            background: ${ p.theme.palette.colors.backgroundgrey };
            border: 1px solid ${ p.theme.palette.colors.disabledgrey };
        ` : ``
    }
`;
export const BodyStepperItemDecorationIcon = styled.img.attrs({ 
    width: 16,
    src: '/icons/check.svg'
})`
`;
export const BodyStepperItemText = styled.div.attrs({ 
})`
    font-size: 16px;
    color: ${ p => p.disabled ? p.theme.palette.colors.disabledgrey : p.theme.palette.colors.text };
`;