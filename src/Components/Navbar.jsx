import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-emoji">💼</span>
          <div className="logo-text-block">
            <span className="logo-title">AppTrackr</span>
            <span className="logo-sub">Complete jobs you applied</span>
          </div>
        </div>


        {/* Right */}
        <div className="nav-right">
          <button className="btn-add" onClick={()=> {navigate("/appli/add"),
            setMenuOpen(!menuOpen)
          }}>+ Add Job</button>
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
        <a href="/"  className="mobile-link active" onClick={() => setMenuOpen(false)}>Dashboard</a>
        <a href="/listAppli"  className="mobile-link"        onClick={() => setMenuOpen(false)}>Applications</a>
        <a href="#"  className="mobile-link"        onClick={() => setMenuOpen(false)}>Interviews</a>
        <a href="#"  className="mobile-link"        onClick={() => setMenuOpen(false)}>Offers</a>
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