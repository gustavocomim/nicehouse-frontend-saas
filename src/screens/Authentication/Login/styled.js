import styled from 'styled-components'  
 
export const FormTitle = styled.div.attrs({ 
})`           
    color: ${ props => props.theme.palette.colors.black }; 
    font-weight: bold;
    font-size: 20px; 

    margin: 32px 0 8px;
`;
export const FormText = styled.div.attrs({ 
})`           
    font-size: 16px; 
    color: ${ props => props.theme.palette.colors.text };

    margin-bottom: 30px;
`;

export const FormSpacer = styled.div.attrs({ 
})`           
    margin-top: 40px;
`;

export const RegisterForgot = styled.div.attrs({ 
})`           
    margin-top: 40px;
    font-size: 15px; 
    color: ${ props => props.theme.palette.colors.grey };
    display: flex;
    justify-content: center;
`;

export const ForgotLink = styled.div.attrs({ 
})`           
    margin-left: 6px;
    color: ${ props => props.theme.palette.secondary.main };
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`;

export const RegisterCall = styled.div.attrs({ 
})`           
    margin: 30px 0 0px;
    color: ${ props => props.theme.palette.colors.grey };
    font-size: 15px;
    font-weight: bold;
`;







export const ForgotContent = styled.div.attrs({ 
})`
    display: flex;
    justify-content: flex-end;
    padding: 16px 16px 8px;
`;


export const BodyLine = styled.div.attrs({ 
})`
    padding: 16px 0 0;
    margin: 16px 16px;
    border-bottom: 1px solid ${ p => p.theme.palette.colors.borderline };
`;


export const LogoGoogle = styled.img.attrs({ 
    src:"/images/google.svg",
    width: 24
})`
    margin: 0 16px 0 0;
`;










