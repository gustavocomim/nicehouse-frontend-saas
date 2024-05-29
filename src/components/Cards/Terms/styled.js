import styled from 'styled-components'  

export const CheckContainer = styled.div.attrs({ 
})`
    display: flex;
    cursor: pointer;
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
   


