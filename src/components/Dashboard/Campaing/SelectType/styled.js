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
