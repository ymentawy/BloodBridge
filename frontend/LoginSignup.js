import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../LoginSignup.css";

import mail from "../components/Assets/username.png";
import namehospital from "../components/Assets/hospital.png";
import passwordlogo from "../components/Assets/padlock.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const LoginSignup = (props) => {
  const navigate = useNavigate();

  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const submitReg = async (e) => {
    if (action === "Register") {
      if (username !== "" && password !== "" && name !== "") {
        console.log("Name:", name);
        console.log("Username:", username);
        console.log("Password:", password);
        e.preventDefault();
        await fetch("http://localhost:8000/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            username,
            password,
          }),
        });
        setMessage("Registered successfully!");
        setName("");
        setUsername("");
        setPassword("");
        setAction("Login");
      } else {
        setMessage("Please provide all sign-up details.");
      }
    } else {
      setAction("Register");
    }
  };
  const submitLog = async (e) => {
    if (action === "Login") {
      if (username !== "" && password !== "") {
        setMessage("Login successful!");
        console.log("Username:", username);
        console.log("Password:", password);
        e.preventDefault();
        await fetch("http://localhost:8000/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            username,
            password,
          }),
        });
        const response = await fetch("http://localhost:8000/api/user", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        const content = await response.json();
        props.setName(content.username);
        setUsername("");
        setPassword("");
        navigate("/donors"); // Navigates to the Donors page
      } else {
        setMessage(
          "Invalid credentials. Please provide a username and password."
        );
      }
    } else {
      setAction("Login");
    }
  };
  const handleRegister = () => {
    if (action === "Register") {
      if (username !== "" && password !== "" && name !== "") {
        console.log("Name:", name);
        console.log("Username:", username);
        console.log("Password:", password);
        setMessage("Registered successfully!");
        setName("");
        setUsername("");
        setPassword("");
        setAction("Login");
      } else {
        setMessage("Please provide all sign-up details.");
      }
    } else {
      setAction("Register");
    }
  };

  const handleLogin = () => {
    if (action === "Login") {
      if (username !== "" && password !== "") {
        setMessage("Login successful!");
        console.log("Username:", username);
        console.log("Password:", password);
        // Reset input fields after login
        setUsername("");
        setPassword("");
        navigate("/Donors"); // Navigates to the Donors page
      } else {
        setMessage(
          "Invalid credentials. Please provide a username and password."
        );
      }
    } else {
      setAction("Login");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={namehospital} style={{ width: 60, height: 60 }} alt="" />
            <input
              type="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <img src={mail} style={{ width: 50, height: 60 }} alt="" />
          <input
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={passwordlogo} style={{ width: 60, height: 60 }} alt="" />
          <input
            type={
              showPassword ? "text" : "password"
          }
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="check">Show Password</label>
                <input
                    id="check"
                    type="checkbox"
                    value={showPassword}
                    onChange={() =>
                        setShowPassword((prev) => !prev)
                    }
                />
        </div>
      </div>
      {action === " Register" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}
      {action === " Register" ? (
        <div></div>
      ) : (
        <div className="message">{message}</div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={submitReg}
        >
          {" "}
          Register
        </div>
        <div
          className={action === "Register" ? "submit gray" : "submit"}
          onClick={submitLog}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
