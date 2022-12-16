import React from "react";
import '../style/App.css';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Message = (props) =>{
    
    return (
       <div className="stack">
         <Stack  direction="column"
           justifyContent="center"
           alignItems="flex-start"
           spacing={2}>
        <Item>{props.post.author}</Item>
        <Item>{props.post.text}</Item>
      </Stack>
       </div>
    );
};

export default Message;