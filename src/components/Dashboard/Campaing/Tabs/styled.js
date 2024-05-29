import styled from 'styled-components'  




export const BodyTabs = styled.div.attrs({ 
})`
    padding: 8px 0;
    display: flex;
    align-items: center;
    gap: 12px;
`;
export const BodyTabItem = styled.div.attrs({ 
})`

    cursor: pointer;
    &:hover{
        opacity: .9;
    }
`;
export const BodyTabItemText = styled.div.attrs(p => ({ 
    ['data-text']: p.children
}))`
    font-size: 14px;
    margin: 9px 33px;

    position: relative;
    color: transparent;
    ${ props => !props.active ? `
        color: ${props.theme.palette.colors.text};
    ` : `
    `}
    &:after {
        content: attr(data-text);
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(95deg, ${props => props.theme.palette.colors.degradeprimary} 0%, ${props => props.theme.palette.colors.degradesecondary} 87%, ${props => props.theme.palette.colors.degradesecondary} 100%);
        ${ props => !props.active ? `
            background: transparent;
        ` : ``}
        -webkit-background-clip: text;
        background-clip: text;
    }
`;
export const BodyTabItemDecoration = styled.div.attrs({ 
})`
    height: 4px;
    background: linear-gradient(95deg, ${props => props.theme.palette.colors.degradeprimary} 0%, ${props => props.theme.palette.colors.degradesecondary} 87%, ${props => props.theme.palette.colors.degradesecondary} 100%);
    ${ props => !props.active ? `
        background: transparent;
    ` : ``}
`;