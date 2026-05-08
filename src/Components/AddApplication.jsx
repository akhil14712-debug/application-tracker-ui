import React, { useState,useEffect } from 'react'
import { createApplication, getAppliById, updateAppli } from '../Service/ApplicationService'
import { useNavigate, useParams } from 'react-router-dom'

const AddApplication = () => {
    const [compName , setCompName] = useState("")
    const [role,setRole] = useState("")
    const [appliDate ,setAppliDate] = useState("")
    const [status , setStatus] = useState("")
    const [loca , setLoca] = useState("")


    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        getAppliById(id)
        .then(res=>{
            setCompName(res.data.companyName)
            setRole(res.data.role)
            setAppliDate(res.data.appliDate)
            setStatus(res.data.status)
            setLoca(res.data.location)
        })
    },[id])


    function addAndUpdate(e){
        e.preventDefault()

        const application = {
            companyName:compName,
            role:role,
            appliDate:appliDate,
            status:status,
            location:loca
        }
        console.log(application)

        if(id){
            updateAppli(id,application)
        .then(res=>{
            console.log("Succses")
            navigate('/listAppli')
        })
        .catch(err => console.log(err))
        }
        else{
            createApplication(application)
        .then(res => navigate("/listAppli"))
        
        .catch(err => console.log(err))
        }   
    }


    
  return (
     <div className="form-page">
      <div className="form-card">

        <h2 className="form-title">Add Application</h2>
        <p className="form-subtitle">Track a new job you applied for</p>

        <form onSubmit={addAndUpdate}>
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" placeholder="e.g. Google" value={compName} 
            onChange={(e)=>setCompName(e.target.value)}/>
          </div>

          <div className="form-group">
            <label>Role</label>
            <input type="text" placeholder="e.g. Software Engineer" 
            value={role} 
            onChange={(e)=>setRole(e.target.value)}/>
          </div>

          <div className="form-group">
            <label>Application Date</label>
            <input type="date" 
            value={appliDate} 
            onChange={(e)=>setAppliDate(e.target.value)}/>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select onChange={(e)=>setStatus(e.target.value)}>
              <option value="">Select status</option>
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Pending">Pending</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input type="text" placeholder="e.g. Bangalore, Remote" 
            value={loca}
            onChange={(e)=>setLoca(e.target.value)}/>
          </div>

          <hr className="form-divider" />

          <div className="form-buttons">
            <button type="submit" className="btn-save"
            >Save</button>
            <button
              type="button"
              className="btn-cancel"
              onClick={() => navigate('/listAppli')}
            >
              Cancel
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default AddApplication