import React,{useState} from 'react';
import { ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { theme ,lightTheme,darkTheme} from '../../constants/Theme/theme';
const MaterialTheme = () => {
    const [darkMode ,setDarkMode] = useState();
    const useStyles = makeStyles((theme) => ({
        root: {
            palette:theme.palette.type,
            color: theme.palette.primary.main,
        },
        title:{
            fontSize: theme.typography.h1.fontSize,
            textAlign:'center',
            fontWeight: theme.typography.fontWeightBold,
        }
    }));

    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}  palette={darkMode ? "dark" : "light"}>
                <p className={classes.title}>
                    Hello!
                </p>
                <button onChange={()=>setDarkMode()}>
                    change color
                </button>
            </div>
        </ThemeProvider>
    );
};

export default MaterialTheme;