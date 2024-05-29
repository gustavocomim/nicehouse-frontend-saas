import styled from 'styled-components'  

import {
    Animation
} from 'ui/styled'

export const DashboardTitle = styled.div.attrs({ 
})`            
    font-size: 40px;
    color: ${ props => props.theme.palette.colors.black };
    margin-top: 50px;
    margin-bottom: 12px;
    
    ${
        props => props.centred ? `
            text-align: center;
        ` : ``
    }

    ${
        props => props.small ? `
            font-size: 24px;
        ` : ``
    }

    @media(max-width: 987px){
        margin-top: 20px;
    }

    @media(max-width: 767px){
        margin-top: 50px;
    }
`;

export const DashboardText = styled.div.attrs({ 
})`            
    font-size: 16px;
    line-height: 24px;
    color: ${ props => props.theme.palette.colors.black };
    ${
        props => props.centred ? `
            text-align: center;
        ` : ``
    }
`;

export const DashboardAnimation = styled(Animation).attrs({ 
    width: '100%',
    height: 420
})`             
`;


export const ContentDashboardAction = styled.div.attrs({ 
})`             
    padding: 8px 0;
    display: flex;
    justify-content: flex-start;
    max-width 221px;
`;


export const BodyPanel = styled.div.attrs({ 
})`             
    border-radius: 8px;
    padding: 20px;
    background: ${ props => props.theme.palette.colors.white };

    box-shadow: 0px 3px 6px ${ p => p.theme.palette.colors.shadow };
`;

export const BodyIllustration = styled.img.attrs({ 
    width: 481,
    height: 481,
    src: '/images/gary.png'
})`
    margin: -100px -20px -90px;

    @media(max-width: 1399px){
        margin: -100px -60px -90px;
    }
    @media(max-width: 1199px){
        margin: -100px -90px -90px;
    }
    @media(max-width: 1039px){
        margin: -100px -100px -90px;
    }
    @media(max-width: 991px){
        margin: -100px -150px -90px;
    }
    @media(max-width: 878px){
        margin: -100px -180px -90px;
    }
    @media(max-width: 767px){
        margin: -100px -20px -90px;
    }

    @media(max-width: 398px){
        margin: -100px -90px -90px;
    }
    @media(max-width: 325px){
        margin: -100px -120px -90px;
    }
    @media(max-width: 295px){
        margin: -100px -140px -90px;
    }
    @media(max-width: 275px){
        margin: -100px -150px -90px;
    }
`;











export const BodyHeader = styled.div.attrs({ 
})`
    padding: 0 0 6px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;
export const BodyHeaderInfo = styled.div.attrs({ 
})`
`;
export const BodyHeaderLink = styled.div.attrs({ 
})`
    font-size: 16px;
    color: ${ props => props.theme.palette.secondary.main };
    cursor: pointer;
    &:hover{
        opacity: .7;
    }
`;
