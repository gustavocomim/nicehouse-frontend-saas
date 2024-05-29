import styled from 'styled-components'  


 
export const BodyHeaderInfo = styled.div.attrs({ 
})`
`; 









export const PageHeaderContent = styled.div.attrs({ 
})` 
`; 
export const PageHeaderContentTop = styled.div.attrs({ 
})` 
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    opacity: .8;
`; 
export const PageHeaderContentTopIcon = styled.img.attrs({ 
    src:'/icons/chevron.svg',
    width: 22
})` 
    transform: rotate( 90deg );
`; 
export const PageHeaderContentTopTitle = styled.div.attrs({ 
})` 
    font-size: 24px;
    color: ${ props => props.theme.palette.colors.black };
    flex:1;
`; 





export const PageBreadcrumbs = styled.div.attrs({ 
})`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 0; 
`; 
export const PageBreadcrumbsText = styled.div.attrs({ 
})`
    color: ${ p => p.current ? `
        ${ p.theme.palette.colors.black };
    ` : `
        ${ p.theme.palette.colors.text };
    `}
`; 
export const PageBreadcrumbsSeparator = styled.div.attrs({ 
})`
    font-size: 14px;
    color: ${ p => p.theme.palette.colors.text };
`; 



