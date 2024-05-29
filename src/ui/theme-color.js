import { createTheme } from '@mui/material/styles'; 

export const theme = createTheme({
  mode: 'light',
  palette: {
    primary: {
      main: '#000', 
      contrastText: '#fff',
    },
    secondary: {
      main: '#5339E3',
      contrastText: '#fff',
    },
    white: {
      main: '#ffffff',
      contrastText: '#000',
    },
    error: {
      main: '#FD2C5E',
      contrastText: '#fff',
    },
    warning: {
      main: '#ffa726',
    },
    info: {
      main: '#a4a4a4',
      contrastText: '#fff',
    },
    success: {
      main: '#419A09',
      contrastText: '#fff',
    },
    colors:{
        white: '#ffffff',
        blacked: '#000',
        black: '#080618',
        grey: '#4C4C4C',
        backgroundgrey: '#F7F7F7',
        lightgrey: '#A4A4A4',
        shadow: 'rgba(0,0,0,.16)',
        darkshadow: 'rgba(0,0,0,.6)',
        lightshadow: 'rgba(112,112,112,.06)',

        text:'#5A5364',
        borderline:'#F4F4F4',
        disabledgrey:'#CCC4D8',
        primarybackground:'#F9FBFE',

        lightprimary: '#DFDAFD',

        degradeprimary: '#AF00E3',
        degradesecondary: '#FF00D6',

        blue: '#2724D3',
        green: '#419A09',
    }
  },
});