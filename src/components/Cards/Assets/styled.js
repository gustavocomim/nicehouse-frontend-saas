import styled from 'styled-components'  





export const UploadLabel = styled.div.attrs({ 
})`
    font-size: 16px;
    color: ${ p => p.theme.palette.colors.text };
    margin: 24px 0 8px;
`;




export const AssetsContent = styled.div.attrs({ 
})`
    border: 1px solid ${ p => p.theme.palette.colors.borderline };
    margin: 0 0 32px;
    border-radius: 8px;
`;
export const AssetsContentItem = styled.div.attrs({ 
})`
    padding: 8px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${ p => p.theme.palette.colors.borderline };
    &:last-child{
        border: 0;
    }
`;
export const AssetsContentItemContent = styled.div.attrs({ 
})`
    display: flex;  
    align-items: center;
    flex: 1;
`;
export const AssetsContentItemIcon = styled.div.attrs({ 
})`
    width: 38px;
    height: 38px;
    border-radius: 12px;
    background: url(/icons/document.svg) no-repeat center center / cover;
`;
export const AssetsContentItemText = styled.div.attrs({ 
})`
    padding: 0 0 0 12px;
    font-size: 14px;
    color: ${ p => p.theme.palette.colors.text };
`;
export const AssetsContentItemAction = styled.div.attrs({ 
})`
    padding: 8px 12px;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        transform: scale(1.05);
    }
`;
export const AssetsContentItemActionIcon = styled.img.attrs({ 
    src:'/icons/trash.svg',
    width: 16
})`
`;
export const AssetsContentItemActionIconDownload = styled.img.attrs({ 
    src:'/icons/cloud-download.svg',
    width: 16
})`
`;



