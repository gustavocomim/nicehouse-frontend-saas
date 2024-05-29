import styled from 'styled-components'  

export const CardEmptyContainer = styled.div.attrs({ 
})`
    background: ${ p => p.theme.palette.colors.white };
    box-shadow: 0px 3px 6px ${ p => p.theme.palette.colors.shadow };
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    border-radius: 16px;
    margin: 16px 0 0 0;
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