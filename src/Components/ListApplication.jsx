import React, { useState ,useEffect } from 'react'
import { completeList, deleteAppli,  listApplication, listCounts } from '../Service/ApplicationService'

import { useNavigate } from 'react-router-dom'
import { useDebounce } from 'use-debounce'
import { getCurrentUser } from '../Service/AuthAService'

const ListApplication = () => {

    const [name , setName] = useState("")
    const [pageNo ,setPageNo] = useState(0)
    const [pageSize,setPageSize] = useState(5)
    const [sortBy,setSortBy] = useState("appId")
    const [sortDir,setSortDir] = useState("desc")

    const [pagination,setPagination] = useState({});

    const [role,setRole] = useState("")
    const [appliDate ,setAppliDate] = useState("")
    const [status , setStatus] = useState("")
    const [loca , setLoca] = useState("")
    const [career,setCareer] = useState("")

    const [value] = useDebounce(name,1000);
    const [applications , setApplications] = useState([])

    const [apply,setApply] = useState(0);
    const [active ,setActive] = useState(0);
    const [pend,setPend] = useState(0);
    const [inter,setInter] = useState(0);


    const [user, setUser] = useState(null);

    const navigate = useNavigate();
    useEffect(()=>{
       console.log("Debounced value:", value);
        getSearch() 
    },[value,pageNo,pageSize,sortBy,sortDir])

    useEffect(() => {
  getCurrentUser().then(setUser)
},[]);

    useEffect(()=>{
       if (user){
     listCounts().
    then(res=>{
      setApply(res.data.applyCnt);
      setActive(res.data.active);
      setPend(res.data.pending);
      setInter(res.data.interv);
    })}
    },[user])
    
    
    

    function getSearch(){
      completeList(value,pageNo,pageSize,sortBy,sortDir)
      .then(res=>{
        setApplications(res.data.data),
        setPagination(res.data.paggination)
      })
      .catch(err=>console.log(err))
      
    }

    console.log(applications)

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

    function decrement()
    {
        if(pageNo > 0){
            setPageNo(pageNo-1)
        }
    }


    


  return (


   <>
   <div className="page">
    <div className="user-greeting">
  <div className="user-avatar">
    {user?.username?.charAt(0)}
  </div>
  <h4>Hi, {user?.username}!</h4>
</div>
    <div className="count-container">
  <div className="count-card">
    <span className="count-number">{apply}</span>
    <span className="count-label">Applied</span>
  </div>
  <div className="count-card">
    <span className="count-number">{inter}</span>
    <span className="count-label">Interview</span>
  </div>
  <div className="count-card">
    <span className="count-number">{pend}</span>
    <span className="count-label">Pending</span>
  </div>
  <div className="count-card">
    <span className="count-number">{active}</span>
    <span className="count-label">Active</span>
  </div>
</div>
   <div className="search-wrapper">
      <input  type="text" placeholder='search company by name' className="search-inp" value={name} onChange={(e)=> setName(e.target.value)} ></input>
       <div >
      <select  className="sorting" placeholder="sort" value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
        <option value="name">Name</option>
        <option value="role">Role</option>
        <option value="appliDate">Date</option>
      </select>
    </div>
    <div >
      <select  className="sortDi" value={sortDir} onChange={(e)=>setSortDir(e.target.value)}>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </div>
    </div>
   
  

  
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

          <button className="career-btn" onClick={() => window.open(e.careerLink, "_blank")} > Click to Careers </button>
  
        </div>

        {/* Status + Actions */}
<div className="card-actions">
  <span className={`status-badge status-${e.status}`}>
    {e.status}
  </span>
  <span className="location">
    📍 {e.location}
  </span>

  <div className="action-buttons">
    <button className="btn-update" onClick={()=>updateAppli(e.appId)} >✏️ Update</button>
    <button className="btn-delete" onClick={()=>deleteApplication(e.appId)}>🗑️ Delete</button>
  </div>
     <h6 style={{"color":"blue"}}>#{e.appId}</h6>
</div>

      </div>
    ))}
  </div>
  <div className='paggination'>
            <button className="prev-btn"  disabled={pagination.currentPage==0}
            onClick={decrement}>Prev</button>
            <div>
                {pagination.currentPage}
            </div>
             <button className="next-btn" disabled={pagination.isLast} onClick={() => setPageNo(pageNo+1)}>Next</button>
        </div>
</div>

   </>
  )
}

export default ListApplication