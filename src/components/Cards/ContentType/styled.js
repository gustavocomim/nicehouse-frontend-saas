import styled from 'styled-components'  

export const FormTypeItem = styled.div.attrs({ 
})`
    padding: 16px;
    display: flex;
    border-radius: 4px;
    display: flex;
    align-items: center;
    margin: 0 0 24px 0;
    ${
        p => p.preview ? `
            border: 1px solid ${  p.theme.palette.colors.borderline };
        ` : `
            background: ${  p.theme.palette.colors.primarybackground };
            cursor: pointer;
        `
    }

    &:last-child{
        margin: 0;
    }
    &:hover{
        opacity: .95;
    }
`;

export const FormTypeItemImage = styled.div.attrs({ 
})`
    width: 100px;
    height: 100px;
    border-radius: 4px;
    background: url(${ p => p.image }) no-repeat center center / cover;
`;

export const FormTypeItemContent = styled.div.attrs({ 
})`
    margin: 0 0 0 16px;
    flex:1;
`;

export const FormTypeItemTitle = styled.div.attrs({ 
})`
    font-size: 16px;
    color: ${ p => p.theme.palette.colors.black };
`;
export const FormTypeItemText = styled.div.attrs({ 
})`
    font-size: 15px;
    color: ${ p => p.theme.palette.colors.text };
    ${
        p => p.preview ? `
        ` : `
            margin: 0 0 0 32px;
        `
    }

    ${
        p => p.link ? `
            cursor: pointer;
            color: ${ p.theme.palette.secondary.main };
            &:hover{
                text-decoration: underline; 
            }
        ` : ``
    }
`;

export const ContentInput = styled.div.attrs({ 
})`
    background: ${ p => p.theme.palette.colors.white };
    margin: 0 0 0 32px;
`;      