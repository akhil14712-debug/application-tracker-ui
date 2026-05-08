import React, { useState ,useEffect } from 'react'
import { deleteAppli, listApplication } from '../Service/ApplicationService'
import Dashboard from './Dashboard'
import { useNavigate } from 'react-router-dom'

const ListApplication = () => {

    const [compName , setCompName] = useState("")
    const [role,setRole] = useState("")
    const [appliDate ,setAppliDate] = useState("")
    const [status , setStatus] = useState("")
    const [loca , setLoca] = useState("")

    const [applications , setApplications] = useState([])

    const navigate = useNavigate();
    useEffect(()=>{
        getSearch() 
    },[compName,role,appliDate,status,loca])
    
    console.log("Applications")
    console.log(applications)


    function getSearch(){
        listApplication()
        .then(res=>setApplications(res.data))
        .catch(err => console.log(err))
    }

    function updateAppli(id){
        navigate(`update-appli/${id}`)
    }

    function deleteApplication(id){
        deleteAppli(id)
        .then(res =>{
            getSearch()
        })
        .catch(err=>console.log(err))
    }
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

  <div className="action-buttons">
    <button className="btn-update" onClick={()=>updateAppli(e.appId)} >✏️ Update</button>
    <button className="btn-delete" onClick={()=>deleteApplication(e.appId)}>🗑️ Delete</button>
  </div>
</div>

      </div>
    ))}
  </div>
</div>
   </>
  )
}

export default ListApplication