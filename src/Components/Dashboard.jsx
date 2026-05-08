import React, { useState,useEffect } from 'react'
import { listApplication } from '../Service/ApplicationService'

const Dashboard = () => {

  const [applications ,setApplications] = useState([])

  useEffect(()=>{
    listApplication()
    .then(res=>setApplications(res.data))
    .catch(errr=>console.log(err))
  },[])

  return (
    <>

     <div className="page">
  <div className="applications-container">
    {applications.map((e) => (
      <div key={e.appId} className="app-card">

        {/* Avatar */}
        <div className="company-avatar">
          {(e.companyName || '?').slice(0, 2).toUpperCase()}
        </div>

        {/* Info */}
        <div className="card-body">
          <h3 className="company-name">{e.companyName}</h3>
          <p className="role-name">{e.role}</p>
          {e.appliDate && (
            <p className="card-date">{e.appliDate}</p>
          )}
        </div>

        {/* Status + Actions */}
<div className="card-actions">
  <span className={`status-badge status-${e.status}`}>
    {e.status}
  </span>

  {/* <div className="action-buttons">
    <button className="btn-update" onClick={()=>updateAppli(e.appId)} >✏️ Update</button>
    <button className="btn-delete" onClick={()=>deleteApplication(e.appId)}>🗑️ Delete</button>
  </div> */}
</div>

      </div>
    ))}
  </div>
</div>
    </>
  )
}

export default Dashboard