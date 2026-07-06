import React, { useState,useEffect } from 'react'
import { createApplication, getAppliById, updateAppli } from '../Service/ApplicationService'
import { useNavigate, useParams } from 'react-router-dom'
import { uploadResume } from '../Service/ResumeService'
import { toast } from 'react-toastify'

const AddApplication = () => {
    const [compName , setCompName] = useState("")
    const [role,setRole] = useState("")
    const [appliDate ,setAppliDate] = useState("")
    const [status , setStatus] = useState("")
    const [loca , setLoca] = useState("")
    const [career ,setCareer] = useState("")
    const [error,setError] = useState({})

    const [resumeFile,setResumeFile] = useState(null)

    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
      if(id){
        getAppliById(id)
        .then(res=>{
            setCompName(res.data.companyName)
            setRole(res.data.role)
            setAppliDate(res.data.appliDate)
            setStatus(res.data.status)
            setLoca(res.data.location)
            setCareer(res.data.careerLink)
        })
      }
    },[id])


    function addAndUpdate(e){
        e.preventDefault()

        if (!validateForm()) {
        return;
    }

        const application = {
            companyName:compName,
            role:role,
            appliDate:appliDate,
            status:status,
            location:loca,
            careerLink:career
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
        .then(res => {
          toast.success("Application Added Successfully!")
          
          setTimeout(()=>{navigate('/listAppli')},500)
          })
          
        .catch(err => console.log(err))
        }   
    }

    function validateForm(){
      let newError = {}

      if(!compName.trim()){
        newError.compName = "Company Name is required"
      }

      if(!role.trim()){
        newError.role = "Role is required"
      }

      if(!appliDate.trim()){
        newError.appliDate = "Application Date is required"
      }

      if(!status.trim()){
        newError.status = "Status is required"
      }

       if(!loca.trim()){
        newError.loca = "Location is required"
      }

       if(!career.trim()){
        newError.career = "Careers is required"
      }

      setError(newError);

    return Object.keys(newError).length === 0;

    }

    // function addAndUpdate(e){
    //   e.preventDefault()
    //   if(!validateForm()){
    //     return;
    //   }

    //   const application = {
    //     companyName:compName,
    //     role:role,
    //     appliDate:appliDate,
    //     status:status,
    //     location:loca,
    //     careerLink:career
    //   }

    //   if(id){
    //     updateAppli(id,application)
    //     .then(res => {
    //       handleResumeUpload()
    //       navigate('/listAppli')
    //     })
    //     .catch(err => console.log(err))
    //   }
    //   else{
    //     createApplication(application)
    //     .then(res => {
    //       handleResumeUpload()
    //       toast.success("Application added Successfully")
    //       setTimeout(()=>{navigate('/listAPPLI')},500)
    //     })
    //     .catch(err => console.log(err))
    //   }

      function handleResumeUpload(){
        if(!resumeFile) return
        const userId = localStorage.getItem("userId")

        if(!userId){
          console.log("No userId found,skipping resume upload")
          return
        }

        uploadResume(resumeFile,userId)
        .then(res => console.log("Resume uploaded :", res.data))
        .catch(err => console.log("Resume upload failed",err))
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
            {error.compName && (<p style={{"color":"red","fontSize":"12px"}}>{error.compName}</p>)}
          </div>

          <div className="form-group">
            <label>Role</label>
            <input type="text" placeholder="e.g. Software Engineer" 
            value={role} 
            onChange={(e)=>setRole(e.target.value)}/>
              {error.role && (<p style={{"color":"red","fontSize":"12px"}}>{error.role}</p>)}
          </div>

          <div className="form-group">
            <label>Application Date</label>
            <input type="date" 
            value={appliDate} 
            onChange={(e)=>setAppliDate(e.target.value)}/>
             {error.appliDate && (<p style={{"color":"red","fontSize":"12px"}}>{error.appliDate}</p>)}
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
             {error.loca && (<p style={{"color":"red","fontSize":"12px"}}>{error.loca}</p>)}
          </div>

          <div className="form-group">
            <label>Resume</label>
            <input type="file" placeholder="Add resume" 
             accept=".pdf,.doc,.docx"
             onChange = {(e) => setResumeFile(e.target.files[0])}
            />
             {error.loca && (<p style={{"color":"red","fontSize":"12px"}}>{error.loca}</p>)}
          </div>

           <div className="form-group">
            <label>Career Link</label>
            <input type="text" placeholder="e.g. https://careers.google.com/jobs/123" 
            value={career} 
            onChange={(e)=>setCareer(e.target.value)}/>
             {error.career && (<p style={{"color":"red","fontSize":"12px"}}>{error.career}</p>)}
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