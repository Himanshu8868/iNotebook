import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use `useNavigate` 

const Login = (props) => {
    const [credentials, setCredentials] = useState({ name:"" , email: "", password: "" , cpassword:""});
    let navigate = useNavigate(); // Use `useNavigate` to handle navigation

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value }); // Update fields dynamically
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload
        const host = "http://localhost:5000";

        try {
            const response = await fetch(`${host}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password }),
            });

            const data = await response.json();
            console.log(data);

            if (data.success) { // Check if the backend response has success = true
                // Save the auth token and redirect
                localStorage.setItem("token", data.authtoken);
                navigate("/"); // Use `navigate` to redirect
                props.showAlert("Successfully Login" , "success")
            } else {
                props.showAlert("Please login with correct details " , "danger")
            }
        } catch (error) {
            console.error("Error during login:", error);
            props.showAlert("An error occurred while logging in. Please try again later." , "danger")
        }
    };

    return (
        <div>
              <h1>Enter a Email and password </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 my-2">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} name="email" id="email" aria-describedby="emailHelp" onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} name="password" onChange={onChange} id="password" />
                </div>

                <button type="submit" className="btn btn-primary" >Login</button>  {/*Use 'onsubmit on form */}
            </form>
        </div>
    )
}
export default Login
