import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [name, setName] = useState('');
    const [usn, setUsn] = useState('');
    const [score, setScore] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        if (!name || !score || !usn || !password) {
            alert("Please fill in all fields.");
            return;
        }

        axios.post("http://localhost:4000/api/register", { name, usn, score, password })
            .then(result => {
                console.log("Registration successful:", result);
                navigate("/Login");
            })
            .catch(error => {
                console.error("Error occurred:", error);
                alert("An error occurred. Please try again.");
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div 
                className="card shadow-lg p-4 mb-5 bg-white rounded w-75 w-md-50 w-lg-40" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                <h1 className="text-center mb-4 text-primary">Sign Up</h1>

                <form onSubmit={handleClick}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Usn" className="form-label">USN</label>
                        <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            id="Usn"
                            onChange={(e) => setUsn(e.target.value)}
                            value={usn}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email1" className="form-label">Score</label>
                        <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            id="score"
                            onChange={(e) => setScore(e.target.value)}
                            value={score}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control form-control-lg" 
                            id="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary btn-lg w-50">Register</button>
                    </div>
                </form>
                <div className="form-text text-center mt-2">
                    Already Have An Account?{' '}
                    <Link to='/login' className="text-primary fw-bold">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
