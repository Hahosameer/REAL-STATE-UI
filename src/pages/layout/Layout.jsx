import "./layout.scss";
import React, { useContext } from 'react'
import Navbar from '../../components/navbar/Navbar'
// import Home from '../home/Home'
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

function Layout() {
  return (
     <div className="loyout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}
function RequireAuth() {
  const {currentUser} = useContext(AuthContext)


  return (

    !currentUser ?  (  <Navigate to="/login"/>) : ( <div className="loyout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>)
  )
}

export  {Layout , RequireAuth}