import styled from 'styled-components'  
 
export const DashboardPage = styled.div.attrs({ 
})`            
`;

export const DashboardBody = styled.div.attrs({ 
})`       
    min-height: calc(100vh - 72px);
    max-height: calc(100vh - 72px);
    background: ${ props => props.theme.palette.colors.white };

    display: flex;
    align-items: flex-start;     
    overflow:auto;
`;

export const DashboardBodyContent = styled.div.attrs({ 
})`             
    background: ${ props => props.theme.palette.colors.white };
    padding: 35px 20px;
    width: 100%; 
    min-height: calc(100vh - 72px);
    background: url(/images/BGdashboard.png) no-repeat center center / cover;
    max-height: calc(100vh - 72px);
    overflow: auto;

    display: flex;
    align-items: flex-start;

    @media(max-width: 767px){
        flex-direction: column;
    }
`;

export const Content = styled.div.attrs({ 
})`           
    overflow:hidden;
`; 