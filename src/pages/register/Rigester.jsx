import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
// import axios  from "axios"
import axios from "axios"
import apiRequest from "../../lib/apiRequest";

function Register() {

const  [error, setError] = useState("");
const [isLoading, setIsLoading] = useState(false);

const navigate= useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("")
    setIsLoading(true)
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
        const res = await apiRequest.post("/auth/register" ,{username , email ,password})
          console.log(res.data)
        navigate("/login")
    } catch (err) {
        setError(err.response.data.message);
        
    } finally{
        setIsLoading(false)
    }
  };
  return (
    <div className="Register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input type="text" name="username" placeholder="Username" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit" disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login" className="link">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
