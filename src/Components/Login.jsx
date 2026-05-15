import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../Service/AuthAService';


const Login = () => {

    const [username ,setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [error, setError] = useState(""); 
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function LoginForm(e){
      e.preventDefault()
        login(username,password)
        .then(res => {
            navigate("/listAppli" )
        })
        .catch(err => console.log(err))
    }
  return (
    <>
    <div className="auth-wrap">
    <div className="auth-card">
      <p className="auth-title">Login your account</p>
      <p className="auth-sub">Start tracking your job applications</p>

      <form onSubmit={LoginForm}>
        <div className="field">
          <label>Username</label>
          <div className="input-wrap">
            <input type="text" placeholder="e.g. johndoe" value={username}
              onChange={(e) => setUsername(e.target.value)} required />
          </div>
        </div>

        <div className="field">
          <label>Password</label>
          <div className="input-wrap">
            <input type="password" placeholder="Min. 4 characters" value={password}
              onChange={(e) => setPassword(e.target.value)} required />
          </div>
        </div>

        {error && <p style={{ color: 'red', fontSize: 13 }}>{error}</p>}

        <button className="submit-btn" type="submit" disabled={loading}>
          {loading ? "Login..." : "Login"}
        </button>
      </form>

      
      <p className="login-link">
  Don't have an account? 
  <span onClick={() => navigate("/appli/register")} className="link-text" style={{"color":"black"}}>
    Sign Up
  </span>
</p>
    </div>
  </div>
    
    </>
  )
}

export default Login