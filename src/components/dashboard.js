// Dashboard.js
import React, { useState } from 'react';
import Sidebar from './sidebar';
import TopBar from './topbar';
import Courses from './courses';// Import your components for dynamic rendering
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
    <div>
     <TopBar />
     <div className="dashboard-container"> 
   <div className="content-wrapper">
     {/* Pass the function to update selected component to the Sidebar */}
     <Sidebar onItemClick={handleSidebarItemClick} />
     <div className="main-content">
       {/* Render the selected component */}
       {selectedComponent === 'Courses' && <Courses />}
       {selectedComponent === 'Analytics' && <Analytics />}
     </div>
   </div>
 </div>
</div>
        

  );
};

export default Dashboard;

