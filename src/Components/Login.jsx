import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../Service/AuthAService';

import { toast } from 'react-toastify'

import Loader from './Loader';


const Login = () => {

    const [username ,setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [error, setError] = useState(""); 
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [name , setName] = useState();

    function LoginForm(e){
      e.preventDefault()
      setError("");
      setLoading(true);
        login(username,password)
        .then(res => {
          toast.success("Loggin successfully!")
                    setTimeout(()=>{navigate('/listAppli')},500)
        })
        .catch(err => toast.success("Invalid credential!"))
        .finally(() => {
          setLoading(false);
        })
        
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
            disabled={loading}
              onChange={(e) => setUsername(e.target.value)} required />
          </div>
        </div>

        <div className="field">
          <label>Password</label>
          <div className="input-wrap">
            <input type="password" placeholder="Min. 4 characters" value={password}
             disabled={loading}
              onChange={(e) => setPassword(e.target.value)} required />
          </div>
        </div>

        {error && <p style={{ color: 'red', fontSize: 13 }}>{error}</p>}

        <button className="submit-btn" type="submit" disabled={loading}>
                            {loading ? (
                                <>
                                    <Loader size={16} /> Logging in...
                                </>
                            ) : (
                                "Login"
                            )}
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