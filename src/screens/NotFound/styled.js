import styled from 'styled-components' 

export const Content = styled.div.attrs({ 
})`          
    overflow:hidden;
`;
 
export const ContentBody = styled.div.attrs({ 
})`          
    min-height: calc(100vh - 280px);
    display: flex;
    align-items: center;
    justify-content: center;
`;
  
export const ContentAnimation = styled.div.attrs({ 
})`          
    display: flex;
    flex-direction: column;
`;
 
  
export const DashboardImage = styled.img.attrs({ 
    src:"/images/borg.png"
})`
    width: 100%;
    max-width: 240px;
    margin: 0 auto 32px;
`;
 
export const DashboardTitle = styled.div.attrs({ 
})`       
    text-align: center;
    font-size: 32px;
    color: ${ props => props.theme.palette.colors.black };
    margin-bottom: 12px;
`;
export const DashboardText = styled.div.attrs({ 
})`          
    font-size: 14px;
    color: ${ props => props.theme.palette.colors.black };
    text-align: center;
`;