import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use `useNavigate` instead of `useHistory`

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  let navigate = useNavigate(); // Use `useNavigate` to handle navigation

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value }); // Update fields dynamically
  };

  const handleSubmit = async (e) => {
    const { name, email, password, cpassword } = credentials;
    e.preventDefault(); // Prevent page reload
    const host = "http://localhost:5000";

    // Check if password and confirm password match
    if (password !== cpassword) {
      props.showAlert("password did not match" , "danger")
      return;
    }

    const response = await fetch(`${host}/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    console.log(data);

    // Save the auth token and redirect
    if (data.success) {
      props.showAlert(" Account created Successfully " , "success")
      localStorage.setItem("token", data.authtoken);
      navigate("login"); // Use `navigate` to redirect
     
    } else {
      props.showAlert("Email alredy Exits use different Email address" , "Warning")
    }
  };

  return (
    <>
     <div className="container my-3"></div>
    <h2>Enter correct details for signup</h2>
    <div className="container my-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" minLength={5}  />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">Password</label>
          <input type="password" className="form-control" id="Password" name="password" onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cPassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cPassword" name="cpassword" onChange={onChange} minLength={5} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Signup;
