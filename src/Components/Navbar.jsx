import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout, getCurrentUser } from '../Service/AuthAService'
import { listCounts } from '../Service/ApplicationService'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [counts, setCounts] = useState(null)
  const profileRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    getCurrentUser().then(data => setUser(data));
    listCounts().then(res => setCounts(res.data));
  }, [])

  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  function handleLogOut() {
    logout();
    navigate("/appli/login")
    setMenuOpen(false)
    setProfileOpen(false)
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
          <button className="btn-add" onClick={() => navigate('/')}>Home</button>
          <button className="btn-add" onClick={() => navigate('/listAppli')}>Applications</button>
          <button className="btn-add" onClick={() => navigate("/appli/add")}>+ Add Job</button>
          <button className="btn-add" onClick={() => navigate("/appli/register")}>Sign Up</button>

          {/* Avatar + Popup */}
          <div className="profile-wrap" ref={profileRef}>
            <div className="avatar" onClick={() => setProfileOpen(!profileOpen)}>
              {user ? user.username.charAt(0).toUpperCase() : "?"}
            </div>

            {/* ── PROFILE POPUP ── */}
            {profileOpen && (
              <div className="profile-popup">

                {/* Close button */}
                <button className="popup-close" 
                  onClick={() => setProfileOpen(false)}>✕</button>

                {/* Avatar + Name */}
                <div className="popup-header">
                  <div className="popup-avatar">
                    {user ? user.username.charAt(0).toUpperCase() : "?"}
                  </div>
                  <div>
                    <p className="popup-name">{user?.username}</p>
                    <p className="popup-role">🟢 Active Job Seeker</p>
                  </div>
                </div>

                <hr className="popup-divider" />

                {/* Stats */}
                <div className="popup-stats">
                  <div className="popup-stat">
                    <p className="popup-stat__number" style={{color:"#8b5cf6"}}>
                      {counts?.total || 0}
                    </p>
                    <p className="popup-stat__label">Total</p>
                  </div>
                  <div className="popup-stat">
                    <p className="popup-stat__number" style={{color:"#FFD93D"}}>
                      {counts?.interview || 0}
                    </p>
                    <p className="popup-stat__label">Interview</p>
                  </div>
                  <div className="popup-stat">
                    <p className="popup-stat__number" style={{color:"#6BCB77"}}>
                      {counts?.offer || 0}
                    </p>
                    <p className="popup-stat__label">Offer</p>
                  </div>
                  <div className="popup-stat">
                    <p className="popup-stat__number" style={{color:"#FF6B6B"}}>
                      {counts?.rejected || 0}
                    </p>
                    <p className="popup-stat__label">Rejected</p>
                  </div>
                </div>

                <hr className="popup-divider" />

                {/* Info */}
                <div className="popup-info">
                  <div className="popup-info__item">
                    <span>👤</span>
                    <div>
                      <p className="popup-info__label">Username</p>
                      <p className="popup-info__value">{user?.username}</p>
                    </div>
                  </div>
                  <div className="popup-info__item">
                    <span>🏷️</span>
                    <div>
                      <p className="popup-info__label">Platform</p>
                      <p className="popup-info__value">StageWise Tracker</p>
                    </div>
                  </div>
                </div>

                <hr className="popup-divider" />

                {/* Action Buttons */}
                <div className="popup-actions">
                  <button className="popup-btn"
                    onClick={() => { navigate('/listAppli'); setProfileOpen(false) }}>
                    📋 My Applications
                  </button>
                  <button className="popup-btn"
                    onClick={() => { navigate('/appli/add'); setProfileOpen(false) }}>
                    ➕ Add New Job
                  </button>
                  <button className="popup-btn popup-btn--logout"
                    onClick={handleLogOut}>
                    🚪 Log Out
                  </button>
                </div>

              </div>
            )}
          </div>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? 'bar bar--open' : 'bar'}></span>
          <span className={menuOpen ? 'bar bar--open' : 'bar'}></span>
          <span className={menuOpen ? 'bar bar--open' : 'bar'}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={menuOpen ? 'mobile-menu mobile-menu--open' : 'mobile-menu'}>
        <button className="btn-add btn-add--full" href="/"  onClick={() => { navigate('/');setMenuOpen(false)}}>Home</button>
        <button  className="btn-add btn-add--full" href="/listAppli" onClick={() => { navigate("/appli/add");setMenuOpen(false)}}>Applications</button>
        <button className="btn-add btn-add--full" onClick={() => { navigate("/appli/register"); setMenuOpen(false) }}>Sign up</button>
        <button className="btn-add btn-add--full" onClick={handleLogOut}>Logout</button>
        <button className="btn-add btn-add--full" onClick={() => { navigate("/appli/add"); setMenuOpen(false) }}>+ Add Job</button>
      </div>

    </nav>
  )
}

export default Navbar