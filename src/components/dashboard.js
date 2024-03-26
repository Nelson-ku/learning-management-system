// Dashboard.js
import React, { useState } from 'react';
import Sidebar from './sidebar';
import TopBar from './topbar';
import Dash from './dash';// Import your components for dynamic rendering
import Analytics from './analytics';

import './style.css';

const Dashboard = () => {
  // State to keep track of which component to render in the main content section
  const [selectedComponent, setSelectedComponent] = useState(null);

  // Function to handle sidebar item clicks and update selected component
  const handleSidebarItemClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <div className="dashboard-container">
      <TopBar />
      <div className="content-wrapper">
        {/* Pass the function to update selected component to the Sidebar */}
        <Sidebar onItemClick={handleSidebarItemClick} />
        <div className="main-content">
          {/* Render the selected component */}
          {selectedComponent === 'Dash' && <Dash />}
          {selectedComponent === 'Analytics' && <Analytics />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

