import styledCmp from 'styled-components'  

import { styled } from '@mui/material/styles'; 
// import Input from '@mui/material/Input'; // standard (material)
// import Input from '@mui/material/FilledInput'; 
import Input from '@mui/material/OutlinedInput'; 
import { TextField } from '@mui/material';


export const MaterialInput = styled(Input)(({ theme, rounded, type, small }) => ({  
    borderRadius: rounded ? 32 : 8,
    height: type === 'textarea' ? (small ? 69 : 150) : 'auto'
}));

export const InputIcon = styledCmp.img.attrs({ 
})`
`;

export const InputLabelOut = styledCmp.div.attrs({ 
})`
    padding: 24px 0 8px;
    color: ${ p => p.theme.palette.colors.text };
`;