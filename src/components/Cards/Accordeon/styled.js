import styled from 'styled-components'  

 

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
${
    p => p.closed ? `` : `
        border-bottom: 1px solid ${ p.theme.palette.colors.borderline };
    `
}

`;
export const CardExpandContainerHeaderIcon = styled.img.attrs({ 
    src: '/icons/chevron.svg'
})`
    ${
        p => p.active ? `
            transform: rotate(180deg);
        ` : ``
    }
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
    display: flex;
    flex-direction: column;
    padding: 16px 16px 16px;
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
`;
