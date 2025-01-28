import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./DashboardLayout"; // Correct path for DashboardLayout.jsx
import Dashboard from "./pages/Dashboard"; // Correct path for Dashboard.jsx
import Profile from "./pages/Profile"; // Correct path for Profile.jsx
import Setting from "./pages/Setting";
import Calendar from "./pages/Calendar";
import './App.css';
import './Custom.css';


const App = () => {
  return (
    <Router>
      {/* Wrap the entire app inside DashboardLayout */}
      <DashboardLayout>
        
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;
