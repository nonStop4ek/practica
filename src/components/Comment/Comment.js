
import {useNavigate} from "react-router-dom";
import Stack from '@mui/material/Stack';
import {Paper, styled} from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Comment = ({comment}) => {
    const navigate = useNavigate();
    const {id, name, email, body, postId} = comment;
    return (<Stack spacing={2} >

            <Item>
        <div>

            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <div>postId: {postId}</div>

            <button  onClick={()=>navigate(`${postId}`)}>getCurrentPost</button>

        </div></Item>
        </Stack>
    );
};

export {Comment};
