import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const TopBar = () => {


  
  return (
    <div className="top-bar">

      <div className="message-icon">
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </div>
      <div className="notification-icon">
        <FontAwesomeIcon icon={faBell} size="lg" />
      </div>
      <div className="user-avatar">
        <FontAwesomeIcon icon={faUserCircle} size="2x" />
      </div>
    </div>
  );
}

export default TopBar;

