import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { register } from '../Service/AuthAService';
import { toast } from 'react-toastify'

import Loader from './Loader';


const Register = () => {

    const [username,setUsername] = useState("")
    const [email ,setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [errors, setErrors] = useState(""); 
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function registerForm(e) {
        e.preventDefault();
        setErrors("");
        
        const validationErrors = validatePassword(password);
    if (validationErrors.length > 0) {
      setErrors(validationErrors[0]);
      return;
    }
    setLoading(true);
        try {
            await register(email, password,username);
            toast.success("Successfully Registered!")
                      setTimeout(()=>{ navigate("/appli/login")},1000)
           ;
        } catch (err) {
            setErrors("Registration failed. Username may already be taken.");
        } finally {
            setLoading(false);
        }
    }

    const validatePassword = (password) => {
 
  
  const errors = [];
    if (password.length < 8) errors.push("At least 8 characters");
    if (!/[A-Z]/.test(password)) errors.push("At least one uppercase letter");
    if (!/[a-z]/.test(password)) errors.push("At least one lowercase letter");
    if (!/[0-9]/.test(password)) errors.push("At least one number");
    if (!/[!@#$%^&*]/.test(password)) errors.push("At least one special character (!@#$%^&*)");
    return errors;
};
   
  return (
    <>
    <div className="auth-wrap">
    <div className="auth-card">
      <p className="auth-title">Create your account</p>
      <p className="auth-sub">Start tracking your job applications</p>

      <form onSubmit={registerForm}>

        <div className="field">
        <label>Username</label>
        <div className="input-wrap">
        <input type="text" placeholder="e.g. Nihal M" value={username}
      disabled={loading}
      onChange={(e) => setUsername(e.target.value)} required />
      </div>
</div>
        <div className="field">
          <label>Email</label>
          <div className="input-wrap">
            <input type="text" placeholder="e.g. abc@gmail.com" value={email}
            disabled={loading}
              onChange={(e) => setEmail(e.target.value)} required />
          </div>
        </div>

        <div className="field">
          <label>Password</label>
          <div className="input-wrap">
            <input type="password" placeholder="Min. 8 characters" value={password}
             disabled={loading}
              onChange={(e) => setPassword(e.target.value)} required />
          </div>
        </div>

        {errors && <p style={{ color: 'red', fontSize: 13 }}>{errors}</p>}
        <button className="submit-btn" type="submit" disabled={loading}>
  {loading ? (
    <>
      <Loader size={16} /> Creating account...
    </>
  ) : (
    "Create account"
  )}
</button>
        
      </form>

      <p className="login-link">Already have an account? <button className="btn-login" onClick={()=>navigate("/appli/login")}>Login</button></p>
    </div>
  </div>
    </>
  )
}

export default Register