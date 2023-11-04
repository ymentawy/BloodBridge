import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import LoginSignUp from "./pages/LoginSignup.js";
import Home from "./pages/Home";
import React, { useState, useEffect } from "react";
import Logout from "./pages/Logout.js";
import Donors from "./pages/Donors.js";

function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/user", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const content = await response.json();
      setName(content.name);
    })();
  });
  return (
    <div className="App">
          <Routes>
            <Route path="/" exact element={<Home name={name} />} />
            <Route path="/LoginSignup" element={<LoginSignUp setName={setName} />} />
            <Route path="/Donors" element={<Donors setName={setName} />} />
            <Route path="/Logout" element={<Logout setName={setName} />} />
          </Routes>
    </div>
  );
}

export default App;
