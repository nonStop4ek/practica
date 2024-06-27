import Stack from "@mui/material/Stack";
import {Paper, styled} from "@mui/material";

const Album = ({album}) => {
    const {id, title} = album;
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <Stack spacing={2}>

            <Item>
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div></Item>
        </Stack>
    );
};

export {Album};