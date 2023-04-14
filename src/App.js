import React from "react";
import Home from "./home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Cookies from "js-cookie";
const token = Cookies.get("token");
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={token ? <Home /> : <Navigate to="/login" replace={true} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
