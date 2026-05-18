import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../Service/AuthAService'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = useNavigate()

  function handleLogOut(){
    logout();
    navigate("/appli/login")
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-emoji">💼</span>
          <div className="logo-text-block">
            <span className="logo-title">Stagewise </span>
            <span className="logo-sub">tracking every stage of application</span>
          </div>
        </div>


        {/* Right */}
        <div className="nav-right">
          <button className="btn-add" onClick={()=> navigate('/')}>Home</button>
          <button className="btn-add" onClick={()=> navigate('/listAppli')}>Applications</button>
          <button className="btn-add" onClick={()=> {navigate("/appli/add")
          }}>+ Add Job</button>
          <button className="btn-add"
          onClick={()=> navigate("/appli/register")}
          >Sign Up</button>
          <button className="btn-add" onClick={handleLogOut}>Log Out</button>
         
          <div className="avatar">YOU</div>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={menuOpen ? 'bar bar--open' : 'bar'}></span>
          <span className={menuOpen ? 'bar bar--open' : 'bar'}></span>
          <span className={menuOpen ? 'bar bar--open' : 'bar'}></span>
        </button>
      </div>

       <div className={menuOpen ? 'mobile-menu mobile-menu--open' : 'mobile-menu'}>
        <a href="/"  className="mobile-link active" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="/listAppli"  className="mobile-link"        onClick={() => setMenuOpen(false)}>Applications</a>
        <button className="btn-add btn-add--full"  onClick={()=>{navigate("/appli/register"),
          setMenuOpen(false)
        }}>Sign up</button>
        <button className="btn-add btn-add--full"  onClick={handleLogOut} 
        >Logout</button>
        <button className="btn-add btn-add--full" onClick={() => {
          navigate("/appli/add")
          setMenuOpen(false)   
        }}>
          + Add Job
        </button>
      </div>

     
    </nav>
  )
}

export default Navbar