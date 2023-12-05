import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Inventory from "./pages/Inventory";
import Home from "./pages/Home";
import Logout from "./pages/Logout.js";
import Donors from "./pages/Donors.js";
import LoginSignup from "./pages/LoginSignup.js";
import RequestBlood from "./components/RequestBlood.js";
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
      setName(content.username);
    })();
  }, []);

  return (
    <div className="App" style={{ display: "flex", minHeight: "100vh" }}>
      <BrowserRouter>
        {name && <Sidebar />}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" exact element={<Home name={name} />} />
            <Route
              path="/loginsignup"
              element={<LoginSignup setName={setName} />}
            />
            <Route path="/logout" element={<Logout setName={setName} />} />
            <Route path="/donors" element={<Donors name={name} />} />
            <Route path="/inventory" element={<Inventory name={name} />} />
            <Route path="/request" element={<RequestBlood name={name} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
