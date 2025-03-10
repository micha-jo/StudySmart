import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../Pages/Signup/signup";
import Login from "../Pages/Login/login";
import Nav from "../Components/Nav/nav";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
