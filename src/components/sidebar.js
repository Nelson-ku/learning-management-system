// Sidebar.js
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import { Link } from 'react-router-dom'; // If using React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChartBar, faGraduationCap, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Sidebar = ({ onItemClick }) => {
  // Function to handle click events from the sidebar links
  // const handleItemClick = (component) => {
  //   onItemClick(component);
  // };

  return (
    <List className='sidebar'>
  {/* Courses */}
  <ListItem button onClick={() => onItemClick('Courses')}>
    <ListItemIcon>
      <FontAwesomeIcon icon={faBook} />
    </ListItemIcon>
    <ListItemText primary="Courses" />
  </ListItem>

  {/* Analytics */}
  <ListItem button onClick={() => onItemClick('Analytics')}>
    <ListItemIcon>
      <FontAwesomeIcon icon={faChartBar} />
    </ListItemIcon>
    <ListItemText primary="Analytics" />
  </ListItem>

  {/* Academics */}
  <ListItem button  onClick={() => onItemClick('Academics')}>
    <ListItemIcon>
      <FontAwesomeIcon icon={faGraduationCap} />
    </ListItemIcon>
    <ListItemText primary="Academics" />
  </ListItem>

  {/* Payment Info */}
  <ListItem button onClick={() => onItemClick('Payment-info')}>
    <ListItemIcon>
      <FontAwesomeIcon icon={faMoneyCheck} />
    </ListItemIcon>
    <ListItemText primary="Payment-info" />
  </ListItem>
</List>
  );
};

export default Sidebar;

