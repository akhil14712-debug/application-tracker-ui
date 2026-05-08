import React from 'react'
import ListApplication from './Components/ListApplication'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import AddApplication from './Components/AddApplication'


const App = () => {
  return (
    <>
    <Navbar/> 
    <Routes>
      <Route path="/" element = {<Dashboard/>}></Route>
      <Route path="/listAppli" element = {<ListApplication/>}></Route>
      <Route path="/appli/add" element = {<AddApplication/>}></Route>
      <Route path="/listAppli/update-appli/:id" element={<AddApplication/>}></Route>
    </Routes>



    </>
   
  )
}

export default App