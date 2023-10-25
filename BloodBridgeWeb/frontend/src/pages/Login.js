import React, { useState } from 'react'
import { Navigate, redirect } from 'react-router-dom'

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const submit =
        async e => {
            e.preventDefault();
            await fetch("http://localhost:8000/api/login",
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({
                        username,
                        password,
                    })
                })
            const response = await fetch("http://localhost:8000/api/user",
                {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                });
            const content = await response.json();
            props.setName(content.name);
            setRedirect(true);
        }
    if (redirect) {
        return <Navigate to="/" />
    }
    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Sign In</h1>

            <div className="form-floating">
                <input className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setUsername(e.target.value)} required />
                <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        </form>
    );
}
export default Login