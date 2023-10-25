import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

function Sidebar() {
  return (
      <Drawer variant="permanent">
        <List>
          <ListItem component={Link} to="/inventory">
            <ListItemText primary="Inventory" />
          </ListItem>
          <ListItem component={Link} to="/donors">
            <ListItemText primary="Donors" />
          </ListItem>
          <ListItem component={Link} to="/request-blood">
            <ListItemText primary="Request Blood" />
          </ListItem>
          <ListItem component={Link} to="/blood-mobiles">
            <ListItemText primary="Blood Mobiles" />
          </ListItem>
        </List>
      </Drawer>
  );
}

export default Sidebar;