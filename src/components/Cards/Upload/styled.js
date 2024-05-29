import styled from 'styled-components'  


 

export const UploadLabel = styled.div.attrs({ 
})`
    font-size: 16px;
    color: ${ p => p.theme.palette.colors.text };
    margin: 24px 0 8px;
`;
export const UploadContent = styled.div.attrs({ 
})`
    height: 100px;
    border: 2px solid ${ p => p.theme.palette.colors.disabledgrey };
    border-style: dashed;
    border-radius: 8px;

    margin: 0 0 32px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        transform: scale(1.03);
    }
`;
export const UploadContentIcon = styled.img.attrs({ 
    src: '/icons/circleAdd.svg'
})`
    margin: 0 0 6px;
`;
export const UploadContentText = styled.div.attrs({ 
})`
    font-size: 14px;
    color: ${ p => p.theme.palette.colors.text };
`;

