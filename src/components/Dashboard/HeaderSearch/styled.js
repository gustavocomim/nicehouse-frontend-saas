import styled from 'styled-components'   
 


export const ContentHeaderSearch = styled.div.attrs({ 
})` 
    position: relative;

    max-width: 550px;
    width: 100%;

    @media(max-width:752px){
        margin: 0px auto 0;
    }
`;

export const ContentHeaderAutocomplete = styled.div.attrs({ 
})`  
    position: absolute;
    margin-top: 16px;
    right: 0;
    left: 0;
    border-radius: 8px;
    background: ${ p => p.theme.palette.colors.white };
    box-shadow: 0px 3px 6px ${ p => p.theme.palette.colors.shadow };
    z-index:1;
`;

export const ContentHeaderAutocompleteItem = styled.div.attrs({ 
})`  
    padding: 16px;


    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        transform: scale( 1.01 );
    }
`;
