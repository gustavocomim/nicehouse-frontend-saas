import styled from 'styled-components'  

import {
    Animation
} from 'ui/styled'

export const DashboardTitle = styled.div.attrs({ 
})`            
    font-size: 40px;
    color: ${ props => props.theme.palette.colors.black };
    margin-top: 120px;
    margin-bottom: 12px;
    ${
        props => props.centred ? `
            text-align: center;
        ` : ``
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

export const DashboardIllustration = styled.img.attrs({ 
    src:'/images/tom.png',
    width: '100%'
})`             
`;

export const ContentDashboardAction = styled.div.attrs({ 
})`             
    padding: 8px 0;
    display: flex;
    justify-content: flex-start;
    max-width 221px;
`;