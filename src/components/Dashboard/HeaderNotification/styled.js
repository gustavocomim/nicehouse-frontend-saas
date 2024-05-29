import styled from 'styled-components'   


export const ContentHeaderNotificationContainer = styled.div.attrs({ 
})` 
    position: relative; 
`;
export const ContentHeaderNotification = styled.div.attrs({ 
})` 
    position: relative;
    cursor: pointer;

    &:hover{
        opacity: .7;
    }
`;
export const ContentHeaderNotificationIcon =styled.img.attrs({ 
    src:'/icons/bell.svg'
})` 
`;
export const ContentHeaderNotificationBadge = styled.div.attrs({ 
})` 
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: ${ p => p.theme.palette.error.main };

    position: absolute;
    top: -5px;
    right: -5px;

    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ContentHeaderNotificationBadgeText = styled.div.attrs({ 
})` 
    margin-top: -3px;
    font-size: 14px;
    font-weight: 500;
    color: ${ p => p.theme.palette.colors.white };
`;







export const HeaderNotificationContainer = styled.div.attrs({ 
})`
    z-index:1;
    position: fixed;
    top: 80px;
    right: 80px;
    background: ${ p => p.theme.palette.colors.white };
    box-shadow: 0px 3px 6px ${ p => p.theme.palette.colors.shadow };
    border-radius: 8px;
    width: 100%;
    max-width: 390px;
`;
export const HeaderNotificationItem = styled.div.attrs({ 
})`
    position: relative;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;

    cursor: pointer;
    background: ${ p => p.theme.palette.colors.white };

    border-bottom: 1px solid ${ p => p.theme.palette.colors.borderline };

    &:hover{
        z-index:2;
        box-shadow: 0px 1px 3px ${ p => p.theme.palette.colors.lightshadow };
    }
`;
export const HeaderNotificationItemDecoration = styled.div.attrs({ 
})`
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background-image: linear-gradient(95deg, ${props => props.theme.palette.colors.degradeprimary} 0%, ${props => props.theme.palette.colors.degradesecondary} 87%, ${props => props.theme.palette.colors.degradesecondary} 100%);

    display: flex;
    align-items: center;
    justify-content: center;
`;
export const HeaderNotificationItemDecorationIcon = styled.img.attrs({ 
    width: 24,
    src: '/icons/bell-white.svg'
})`
`;
export const HeaderNotificationItemContent = styled.div.attrs({ 
})`
    flex: 1;
`;
export const HeaderNotificationItemContentTitle = styled.div.attrs({ 
})`
    font-size: 16px;
    font-weight: 500;
    color: ${ p => p.theme.palette.colors.text };
`;
export const HeaderNotificationItemContentText = styled.div.attrs({ 
})`
    font-size: 14px;
    color: ${ p => p.theme.palette.colors.text };
`;
export const HeaderNotificationItemIcon = styled.img.attrs({ 
    src: '/icons/chevron.svg',
    width: 16
})`
    transform: rotate(270deg);
`;