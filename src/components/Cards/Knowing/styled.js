import styled from 'styled-components'  

export const ContentKnow = styled.div.attrs({ 
})`
    border: 1px solid ${ p => p.preview ? p.theme.palette.colors.disabledgrey : p.theme.palette.secondary.main };
    border-radius: 8px;
    padding: 16px;
    display: flex;
    align-items: flex-start;
`;
export const ContentKnowIcon = styled.img.attrs(p => ({ 
    src: p?.preview ? '/icons/info-disabled.svg' : '/icons/info.svg',
    width: 20
}))`
    margin-top: 2px;
`;
export const ContentKnowText = styled.div.attrs({ 
})`
    padding: 0 0 0 12px;
    font-size: 16px;
    color: ${ p => p.preview ? p.theme.palette.colors.disabledgrey : p.theme.palette.colors.text };
`;