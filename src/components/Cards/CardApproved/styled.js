import styled from 'styled-components'  



export const CardGalleryBodyStatus = styled.div.attrs({ 
})`
    display: flex;
    align-items: center;
    gap: 12px;
`;
export const CardGalleryBodyStatusIcon = styled.img.attrs(p => ({ 
    width: 16,
    src: `/icons/${p.icon}.svg`
}))`
`;
export const CardGalleryBodyStatusText = styled.div.attrs({ 
})`
    font-size: 14px;
    color: ${ props => props.red ? props.theme.palette.error.main : props.theme.palette.colors.green };
`;


export const CardGalleryBodyStatusSpacer = styled.div.attrs({ 
})`
    height: 21px;
`;