import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function Register() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const submit = async e => {
        e.preventDefault();
        await fetch("http://localhost:8000/api/register",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    username,
                    password,
                })
            })
        setRedirect(true);
    }
    if (redirect) {
        return <Navigate to="/login" />
    }
    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

            <div className="form-floating">
                <input type="text" className="form-control" id="floatingName" placeholder="Name" onChange={e => setName(e.target.value)} required />
                <label htmlFor="floatingName">Name</label>
            </div>

            <div className="form-floating">
                <input className="form-control" id="floatingUser" placeholder="name@example.com" onChange={e => setUsername(e.target.value)} required />
                <label htmlFor="floatingUser">Username</label>

            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Sign Up</button>
        </form>
    );
}
export default Register