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

    @media(max-width:991px){
        flex-direction: column-reverse;
    }
`;







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







export const CheckText = styled.div.attrs({ 
})`
    display: flex;
    gap: 4px;
    font-size: 14px;
    color: ${ p => p.link ? p.theme.palette.secondary.main : p.theme.palette.colors.text };
    ${
        p => p.link ? `
            cursor: pointer;
            &:hover{
                text-decoration: underline;
            }        
        ` : `
            margin: 10px 0 0 -20px;
        `
    }
    ${
        p => p.flat ? `
            margin: 10px 0 0 0px;  
        ` : `
        `
    }
`;
   





 