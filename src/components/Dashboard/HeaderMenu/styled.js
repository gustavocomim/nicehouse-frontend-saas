import styled from 'styled-components'   
 


export const ContentHeaderMenuContainer = styled.div.attrs({ 
})` 
    position: relative;
`;

export const ContentHeaderMenu = styled.div.attrs({ 
})` 
    display: flex;
    align-items: center;
    gap: 12px;

    cursor: pointer;
    &:hover{
        opacity: .7;
    }
`;
export const ContentHeaderMenuIcon = styled.img.attrs({ 
    src:'/icons/chevron.svg'
})` 
    ${
        p => p.opened ? `
            transform: rotate(180deg);
        ` : ``
    }
`;
export const ContentHeaderMenuDecoration = styled.div.attrs({ 
})` 
    width: 56px;
    height: 56px;
    border-radius: 28px;

    background: ${ p => p.theme.palette.colors.lightprimary } url(${p=>p.image}) no-repeat center center / cover;

    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ContentHeaderMenuDecorationText = styled.div.attrs({ 
})` 
    font-size: 24px;
    color: ${ p => p.theme.palette.colors.text };
`;





export const HeaderMenuContainer = styled.div.attrs({ 
})`
    position: absolute;
    right: 0;
    background: ${ p => p.theme.palette.colors.white };
    box-shadow: 0px 3px 6px ${ p => p.theme.palette.colors.shadow };
    border-radius: 8px;
    width: 100%;
    max-width: 200px;

    margin-top: 16px;
`;
export const HeaderMenuItem = styled.div.attrs({ 
})`
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;

    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        transform: scale(1.05);
    }
`;
export const HeaderMenuItemIcon = styled.img.attrs({ 
    src: '/icons/logout-header.svg',
    width: 16
})`
`;
export const HeaderMenuItemText = styled.div.attrs({ 
})`
    font-size: 14px;
    color: ${ p => p.theme.palette.colors.text };
`;
                