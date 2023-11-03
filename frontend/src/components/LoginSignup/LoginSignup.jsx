import React from 'react';
import { useEffect, useState } from "react";

import './LoginSignup.css'

import mail from '../Assets/username.png'
import namehospital from '../Assets/hospital.png'
import passwordlogo from '../Assets/padlock.png'
import {Routes, Route, useNavigate} from 'react-router-dom';


const LoginSignup = () => {

    const navigate = useNavigate();
    const navigateToHome = () => {
        // 👇️ navigate to /contacts
        navigate('BloodBridgeWeb\frontend\src\pages\Home.js');
      };
    const navigateToLogin = () => {
        // 👇️ navigate to /contacts
        navigate('BloodBridgeWeb\frontend\src\pages\Login.js');
      };
    const [action,setAction] = useState("Login");
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Register = () => {
        if (username !== '' && password !== '' && name !== '') {
        console.log('Name:', name);
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Sign Up successful!');
        // Reset the input fields after sign-up
        setName('');
        setUsername('');
        setPassword('');
        navigateToLogin>Login;}
        else
        {
            console.log('Please provide all sign-up details.');
        }
    };
    const Login = () => {
        if (username !== '' && password !== '') {
            console.log('Login successful!');
            // Reset input fields after login
            setUsername('');
            setPassword('');
            navigateToHome>Home;
        } else {
            console.log('Invalid credentials. Please provide a username and password.');
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
                <input type = "name" placeholder = "Name"/>
                </div> }

                <div className = "input">
                <img src = {mail} style = { {width: 50, height: 60} } alt="" />
                <input type = "username" placeholder = "  Username"/>
                </div> 
                <div className = "input">
                <img src = {passwordlogo} style = { {width: 60, height: 60} } alt="" />
                <input type = "password" placeholder = "Password"/>
                </div>     
            </div>
            {action === " Register"? <div></div>: <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
}
            <div className="submit-container">
                <div className={action === "Login"? "submit gray" : "submit" } 
                onClick={() => {
                    if (action === 'Register') {
                        Register(); // Process sign-up data
                    } else {
                        setAction('Sign Up');
                    }}} > Register</div>
                <div className={action === "Register"? "submit gray" : "submit" } 
                onClick={() => {
                    if (action === 'Login') {
                        Login(); // Process sign-up data
                    } else {
                        setAction('Login');
                    }}} >Login</div>
            </div>
        </div>
    )
}

export default LoginSignup