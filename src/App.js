import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import Header from "./components/Header/Header";
const App = () => {
  const location = useLocation();
  return (
    <div className="appContainer">
      {location.pathname !== "/login" && <Header />}
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
