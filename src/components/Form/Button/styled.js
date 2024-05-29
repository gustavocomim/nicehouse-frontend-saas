import styledCmp from 'styled-components' 
import ReactLoading from 'react-loading'

import { styled } from '@mui/material/styles'; 
import Button from '@mui/material/Button'; 

export const Load = styledCmp(ReactLoading).attrs( props => ({ 
    type: 'spin',
    color: props.outline ? 
        (
            props.primary ? props.theme.palette.primary.main : 
            ( props.secondary ? props.theme.palette.secondary.main : props.theme.palette.info.main )
        ) 
    : ( props.white ? props.theme.palette.primary.main : props.theme.palette.primary.contrastText),
    height: 20,
    width: 20
}))`          
    display: flex;
`; 

export const ColorButton = styled(Button)(({ theme, nospace, square }) => ({ 
    width: '100%',
    minHeight: '45px', 
    marginTop:  nospace ? '0px' : '12px',
    borderRadius: square ? null : 23,
    textTransform: 'initial',
    fontFamily: "Lato",
    fontSize: 16
}));
 