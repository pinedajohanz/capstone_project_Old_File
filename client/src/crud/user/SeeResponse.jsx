import React, { useState, useEffect } from 'react'
import "../../dashboard/Dashboard.css"
import SidebarRes from "../../components/SidebarRes";

function SeeResponse() {

  const [MyComplaints, setMyComplaints] = useState([]);
  const resident_id = localStorage.getItem('user.resident_id') // retrieve resident_id goods

  //console.log(MyComplaints) // retrieve objects goods
  
  async function getMyComplaints() {
    const res = await fetch(`http://localhost:5000/MyComplaints/${resident_id}`);

    const MyComplaintsArray = await res.json();
    
    // converts date format to MM/DD/YYYY
    MyComplaintsArray.forEach(complaints => {
      complaints.date_res = (new Date(complaints.date_res)).toLocaleDateString()
    }); 
    
    setMyComplaints(MyComplaintsArray);
    
  }

  useEffect(() => {
    getMyComplaints();
  }, []);

  return (
    <>
    <SidebarRes />
    <div className="container">
        <table className="table table-bordered border-success table-hover">
            <thead>
                <tr>
                <th scope="col">Resident ID#</th>
                <th scope="col">Complaint ID#</th>
                <th scope="col">Complaint Message</th>
                <th scope="col">Status</th>
                <th scope="col">0-IN-PROGRESS / 1-COMPLETED</th>
                <th scope="col">Date Attended by Barangay</th>
                <th scope="col">Response from Barangay</th>
                </tr>
            </thead>
            <tbody>
            {MyComplaints.map(Complaints => (
                  <tr key={Complaints.MyComplaints}>
                    <td>{Complaints.resident_id}</td>
                    <td>{Complaints.complaints_id}</td>
                    <td>{Complaints.message_comp}</td>
                    <td>{Complaints.status_msg}</td>
                    <td>{Complaints.status_info_id}</td>
                    <td>{Complaints.date_res}</td>
                    <td>{Complaints.message_gov}</td>
                  </tr>
                ))
                }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default SeeResponse