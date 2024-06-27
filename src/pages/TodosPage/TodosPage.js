
import {Todos} from "../../components/Todos/Todos";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


const TodosPage = () => {
    return (
        <div><ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <main><Todos/></main>
        </ThemeProvider></div>
    );
};

export {TodosPage};
