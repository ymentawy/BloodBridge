import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Register from "./pages/Register";
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
      <BrowserRouter>
        <main className="form-signin w-100 m-auto">
          <Routes>
            <Route path="/" exact element={<Home name={name} />} />
            <Route path="/login" element={<Login setName={setName} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout setName={setName} />} />
          </Routes>
        </main>
        <Routes>
          <Route path="/donors" element={<Donors setName={setName} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
