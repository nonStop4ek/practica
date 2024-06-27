
import {useNavigate} from "react-router-dom";
import css from './Header.module.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from "@mui/material/Stack";

import * as React from 'react';
import Button from '@mui/material/Button';
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
const Header = () => {
    const navigate = useNavigate();
    return (
        <Stack direction="row" spacing={2}>
        <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <main>
        <div className={css.Header}>
       <Button variant="contained"     onClick={()=>navigate('todos')} >Todos</Button>
            <Button variant="contained" onClick={()=>navigate('albums')}>Albums</Button>
            <Button variant="contained" onClick={()=>navigate('comments')}>Comments</Button>
        </div></main>
        </ThemeProvider>  </Stack>
    );
};

export {Header};
