
import {Albums} from "../../components/Albums/Albums";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});



const AlbumsPage = () => {
    return (
        <div><ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <main>
            <Albums/></main>
        </ThemeProvider>
        </div>
    );
};

export {AlbumsPage};
