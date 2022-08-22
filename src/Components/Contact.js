import React from "react";
import Box from "@mui/material/Box";
import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


const Contact = () => {
  return (
    <>
      <Box sx={{borderBottomColor: 'black'}}>
        <ListItem>
            <ListItemAvatar>
                <Avatar><Phone /></Avatar>
            </ListItemAvatar>
            <ListItemText primary="(+250) 78 668 7189"></ListItemText>
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar><Email /></Avatar>
            </ListItemAvatar>
            <ListItemText primary="samboumichael@gmail.com"></ListItemText>
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar><GitHub /></Avatar>
            </ListItemAvatar>
            <ListItemText primary="msambou"></ListItemText>
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar><LinkedIn /></Avatar>
            </ListItemAvatar>
            <ListItemText primary="michaelsambou"></ListItemText>
        </ListItem>
      </Box>
    </>
  );
};

export default Contact;
