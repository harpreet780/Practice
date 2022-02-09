import { createTheme } from '@material-ui/core';
export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2'
    },
    success: {
      main: '#4caf50'
    }
  },
  typography: {
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      lineHeight: "1.2em"
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: "normal",
      lineHeight: "1.2em"
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  }
});
export const lightTheme = createTheme({
  palette: {
    type: "dark"
  }
});
export const darkTheme = createTheme({
  palette: {
    type: "light"
  }
});