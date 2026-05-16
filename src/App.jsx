import React from 'react'
import ListApplication from './Components/ListApplication'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import AddApplication from './Components/AddApplication'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Register from './Components/Register'
import Login from './Components/Login'
import Home from './Components/Home'
import ProtectedRoute from './Components/ProtectedRoute'


const App = () => {
  return (
    <>
    <Navbar/> 
    <Routes>
      <Route path="/" element = {<Home/>}></Route>
      <Route path="/listAppli" element = {
        <ProtectedRoute>
          <ListApplication/>
        </ProtectedRoute>
        }></Route>
      <Route path="/appli/add" element = {<AddApplication/>}></Route>
      <Route path="/listAppli/update-appli/:id" element={<AddApplication/>}></Route>
      <Route path="appli/register" element={<Register/>}></Route>
      <Route path="appli/login" element={<Login/>}></Route>

    </Routes>

 <ToastContainer position="top-right" autoClose={3000} />


    </>
   
  )
}

export default App