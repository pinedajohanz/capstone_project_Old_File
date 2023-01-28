import "./Dashboard.css"
import SideBarAdmin from "../components/SideBarAdmin";
import React from 'react'

export default function AdminDash() {
  return (
    <>
      <div className="App">
        <SideBarAdmin />
        <h1>Put Here tables to display all complaints and upon click on a specific complaint id appears the responses of brgy one complaint to many responses</h1>
      </div>
    </>
  )  
}
