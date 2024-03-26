// Sidebar.js
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom'; // If using React Router

const Sidebar = ({ onItemClick }) => {
  // Function to handle click events from the sidebar links
  const handleItemClick = (component) => {
    onItemClick(component);
  };

  return (
    <List>
      {/* Example sidebar items */}
      <ListItem button component={Link} to="/dashboard" onClick={() => handleItemClick('Dashboard')}>
        <ListItemIcon>{/* Icon Component */}</ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/analytics" onClick={() => handleItemClick('Analytics')}>
        <ListItemIcon>{/* Icon Component */}</ListItemIcon>
        <ListItemText primary="Analytics" />
      </ListItem>
      <ListItem button component={Link} to="/academics" onClick={() => handleItemClick('Academics')}>
        <ListItemIcon>{/* Icon Component */}</ListItemIcon>
        <ListItemText primary="Academics" />
      </ListItem>
      <ListItem button component={Link} to="/payment-info" onClick={() => handleItemClick('Payment-info')}>
        <ListItemIcon>{/* Icon Component */}</ListItemIcon>
        <ListItemText primary="Payment-info" />
      </ListItem>
      {/* Add more sidebar items as needed */}
    </List>
  );
};

export default Sidebar;

