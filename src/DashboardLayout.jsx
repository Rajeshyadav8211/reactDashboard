import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faTachometerAlt, faUser, faCog, faCalendarAlt, faTable, faMailForward, faEdit, faSitemap } from "@fortawesome/free-solid-svg-icons";
import Footer from './components/Footer';

const DashboardLayout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarCollapsed(!isSidebarCollapsed);
  // };
  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  return (
    <div className={`dashboard-container ${isSidebarCollapsed ? "collapsed" : ""}`}>


      {/* Sidebar */}
      <div className="sidebar">
        <h3>My App</h3>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} end>
              <FontAwesomeIcon icon={faTachometerAlt} className="menu-icon" />
              <span className="menu-text">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
              <FontAwesomeIcon icon={faUser} className="menu-icon" />
              <span className="menu-text">Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/setting" className={({ isActive }) => (isActive ? "active" : "")}>
              <FontAwesomeIcon icon={faCog} className="menu-icon" />
              <span className="menu-text">Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendar" className={({ isActive }) => (isActive ? "active" : "")}>
              <FontAwesomeIcon icon={faCalendarAlt} className="menu-icon" />
              <span className="menu-text">Calendar</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/datatable" className={({ isActive }) => (isActive ? "active" : "")}>
              <FontAwesomeIcon icon={faTable} className="menu-icon" />
              <span className="menu-text">Data Table</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/mailboxes" className={({ isActive }) => (isActive ? "active" : "")}>
              <FontAwesomeIcon icon={faMailForward} className="menu-icon" />
              <span className="menu-text">Mail Boxes</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/inputform" className={({ isActive }) => (isActive ? "active" : "")}>
              <FontAwesomeIcon icon={faEdit} className="menu-icon" />
              <span className="menu-text">Input Form</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/menulevel" className={({ isActive }) => (isActive ? "active" : "")}>
              <FontAwesomeIcon icon={faSitemap} className="menu-icon" />
              <span className="menu-text">Menu Levels</span>
            </NavLink>
          </li>
         
        
        </ul>
        <hr />
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <button className="toggle-button" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={isSidebarCollapsed ? faTimes : faBars} />
          </button>
          <h2>Dashboard</h2>
        </div>

        {/* Dashboard Content */}
        <div className="content">{children}</div>
        <div className="footer-dx">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
