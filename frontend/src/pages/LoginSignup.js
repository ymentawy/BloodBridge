import React from 'react'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

import '../LoginSignup.css'

import mail from '../components/Assets/username.png'
import namehospital from '../components/Assets/hospital.png'
import passwordlogo from '../components/Assets/padlock.png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const LoginSignup = () => {
    const navigate = useNavigate();

    const [action,setAction] = useState("Login");
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    const handleRegister = () => {
        if (action === 'Register') {
            if (username !== '' && password !== '' && name !== '') {
                console.log('Name:', name);
                console.log('Username:', username);
                console.log('Password:', password);
                setMessage('Registered successfully!');
                // Reset the input fields after sign-up
                setName('');
                setUsername('');
                setPassword('');
                setAction('Login');
            }
            else
            {
                setMessage('Please provide all sign-up details.');
            }
        } else {
            setAction('Register');
        }
    };    

    const handleLogin = () => {
        if (action === 'Login') {
            if (username !== '' && password !== '') {
                setMessage('Login successful!');
                console.log('Username:', username);
                console.log('Password:', password);
                // Reset input fields after login
                setUsername('');
                setPassword('');
                navigate('/Donors'); // Navigates to the Donors page           
            } else {
                setMessage('Invalid credentials. Please provide a username and password.');
            }
        } else {
            setAction('Login');
        }
    };

        return (
            <div className = "container">
                <div className = "header">
                    <div className = "text">{action}</div>
                    <div className = "underline" ></div>
                </div>
                <div className = "inputs">
                    {action === "Login"? <div></div> : <div className = "input">
                    <img src = {namehospital} style = { {width: 60, height: 60} } alt="" />
                    <input type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div> }

                    <div className = "input">
                    <img src = {mail} style = { {width: 50, height: 60} } alt="" />
                    <input type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div> 
                    <div className = "input">
                    <img src = {passwordlogo} style = { {width: 60, height: 60} } alt="" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>     
                </div>
                {action === " Register"? <div></div>: <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}    
                {action === " Register"? <div></div>: <div className="message">{message}</div>}
        
                <div className="submit-container">
                    <div className={action === "Login"? "submit gray" : "submit" } 
                    onClick={handleRegister} > Register</div>
                    <div className={action === "Register"? "submit gray" : "submit" } 
                    onClick={handleLogin} >Login</div>
                </div>
            </div>
        )

};

export default LoginSignup