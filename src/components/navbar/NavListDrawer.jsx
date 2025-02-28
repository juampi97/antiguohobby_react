import React from "react";
import { NavLink } from "react-router-dom";

import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const NavListDrawer = ({navArrayLink,  setOpen}) => {
  return (
    <Box sx={{ width: 250, height: "100%", display:"flex" ,bgcolor: "#F0941F" }}>
      <nav>
        <List >
          {navArrayLink.map( (item) => (
          <ListItem>
            <ListItemButton key={item.path} component={NavLink} to={item.path} onClick={() => setOpen(false)}>
              {/* <ListItemIcon> {item.icon} </ListItemIcon> */}
              <ListItemText>{item.title}</ListItemText>
            </ListItemButton>
          </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
