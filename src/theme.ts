import { createTheme } from '@mui/material/styles';
import { green, deepPurple , blue } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        mode: "light", // TODO: Implement dark mode
        background: {
            default: '#fff',
        },
        primary: {
            main: blue[500],
        },
        secondary: {
            main: deepPurple[400],
        },
    },
    typography: {
        
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 700,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
    }
  });
  
  