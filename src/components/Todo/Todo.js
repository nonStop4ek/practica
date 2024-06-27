import {Paper, styled} from "@mui/material";
import Stack from "@mui/material/Stack";

const Todo = ({todo}) => {
    const {id, title} = todo;
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (  <Stack spacing={2}>

        <Item>
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div></Item>
        </Stack>
    );
};

export {Todo};
