import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import PrivacyPolicy from "./Component/PrivacyPolicy";
import TermsOfService from "./Component/TermsOfService";
import RefundPolicy from "./Component/RefundPolicy";
import Home from "./Home";
import Report from "./Component/Report";
import AdminLogin from "./Component/AdminLogin";
import DashBoard from "./Component/DashBoard";

// ProtectedRoute Component
const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/AdminLogin" />;
};

const App = () => {
  // State to manage authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  // Handle login and set authentication status
  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  // Handle logout and clear authentication status
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  // Redirect to login if not authenticated on initial load
  useEffect(() => {
    if (!isAuthenticated && window.location.pathname !== "/AdminLogin") {
      window.location.href = "/AdminLogin";
    }
  }, [isAuthenticated]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
          <Route path="/Term-of-Services" element={<TermsOfService />} />
          <Route path="/Refund-Policy" element={<RefundPolicy />} />
          <Route path="/Report" element={<Report />} />
          <Route
            path="/AdminLogin"
            element={<AdminLogin onLogin={handleLogin} />}
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <DashBoard onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
