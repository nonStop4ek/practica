import {Outlet} from "react-router-dom";
import {Comments} from "../../components/Comments/Comments";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});



const CommentsPage = () => {
    return (
        <div>  <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <main>
            <Outlet/>
            <hr/>
            <Comments/></main>
        </ThemeProvider>
        </div>
    );
};

export {CommentsPage};