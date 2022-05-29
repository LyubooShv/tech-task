import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
const App = () => {
  const location = useLocation();
  return (
    <div className="appContainer">
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="*"
          element={
            location.pathname === "/" && <Navigate to="/login" replace />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
