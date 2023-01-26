import React from 'react'
import "../../dashboard/Dashboard.css"
import SidebarRes from "../../components/SidebarRes";
import { useState } from 'react'
import e from 'cors';
import { ToastContainer, toast, Flip } from 'react-toastify'; 

function FileComp() {
    // pop up notification if form submitted successfully
    const notify = () => {
        toast.success("Complaint Form Submitted!")
    }

    const [message_comp, setmessage_comp] = useState("");
    const [location_of_complaint, setlocation_of_complaint] = useState("");
    const [type_of_complaint, settype_of_complaint] = useState("");
    const [date_of_filing, setdate_of_filing] = useState("");
    const [time_of_filing, settime_of_filing] = useState("");
    // default value must be the resident_id who logged in the user dashboard
    const resident_id = localStorage.getItem('user.resident_id')
    // const [status_info_id, setstatus_info_id] = useState("0");


    const onSubmitForm = async (e) => {
        e.preventDefault();
        
        try {
            const body = { message_comp, location_of_complaint, type_of_complaint, date_of_filing, time_of_filing , resident_id }
            console.log(body)
            const res = await fetch("http://localhost:5000/complaints", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            // pop up notification if form submitted
            notify()
        
        console.log(res)
        } catch (err) {
            console.error(err.message)
        }
    }
  return (
    <>
    <SidebarRes />
    <div className="container">
        <form onSubmit={onSubmitForm} className="form-border my-3">
        <h2 className="text-center my-5">File Your Complaint</h2>
            <label>Complaint message:</label>
            <textarea className="form-control my-3" type="text" placeholder="Write your Complaint here" value={message_comp} onChange={e => setmessage_comp(e.target.value)} required />
            <label>Location of Complaint:</label>
            <input className="form-control my-3" type="text" placeholder="Barangay Molino 4" value={location_of_complaint} onChange={e => setlocation_of_complaint(e.target.value)} required/>
            <label>Type of Complaint:</label>
            <input className="form-control my-3" type="text" placeholder="Type of Complaint (Road Issue, Drainage Issue)" value={type_of_complaint} onChange={e => settype_of_complaint(e.target.value)} required />
            <label>Date of Filing:</label>
            <input className="form-control my-3" type="date" placeholder='Date of Filing (DD/MM/YYYY)' value={date_of_filing} onChange={e => setdate_of_filing(e.target.value)} required />
            {/* Edit: for military time input */}
            <label>Time of Filing:</label>
            <input className="form-control my-3" type="time" placeholder="Military time (14:00)" value={time_of_filing} onChange={e => settime_of_filing(e.target.value)} required />
            {/* Edit: User na naka log in dapat naka-assign automatic sa resident ID below */}
            <label>User ID# (AUTO GENERATED)</label>
            <input className="form-control my-3" type="number" placeholder="RESIDENT ID" value={resident_id} aria-label="Disabled input example" disabled />
            
            
            <button className="btn btn-success my-3" >Submit</button>
        </form>
    </div>
    <ToastContainer
            position="top-right"
            autoClose={9000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored" 
            transition={Flip}  />
    </>
  )
}
export default FileComp