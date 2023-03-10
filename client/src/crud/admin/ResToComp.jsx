import React, { useState, useEffect } from 'react'
import "../../dashboard/Dashboard.css"
import SideBarAdmin from "../../components/SideBarAdmin";
import Respondbtn from '../Respondbtn';

function ResToComp() {
  const [AllComp, setAllComp] = useState([]);

  // GET all Complaints from Residents
  async function getAllComp() {
    const res = await fetch("http://localhost:5000/allcomplaints");

    // JSON data stored in array variable
    const AllCompArray = await res.json();
    
    // converts date format to MM/DD/YYYY
    AllCompArray.forEach(complaints => {
      complaints.date_of_filing = (new Date(complaints.date_of_filing)).toLocaleDateString()
    }); 

    // data transfer from array to setState then map it at table
    setAllComp(AllCompArray);
  }

  // called after the component renders, if the [depend] have not changed, the effect will not run again.
  useEffect(() => {
    getAllComp();
  }, []);
    
  return (
    <>
    <SideBarAdmin />
    <div className="container-table m-5 text-bg-light">
        <table className="table table-bordered border-danger table-hover">
            <thead>
                <tr>
                <th scope="col">Complaint ID#</th>
                <th scope="col">Message from Complainant</th>
                <th scope="col">Location of Complaint</th>
                <th scope="col">Type of Complaint</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Resident ID</th>
                <th scope="col">Status</th>
                {/* <th scope="col">0 = IN-PROGRESS / 1 = COMPLETED</th> */}
                <th scope="col">Respond to Complaint</th>

                </tr>
            </thead>
            <tbody>
            {/* maps over an array to display each item in a row from state */}
            {AllComp.map( Complaints => (
                  <tr key={Complaints.complaints_id}>
                    <td>{Complaints.complaints_id}</td>
                    <td className="fw-semibold">{Complaints.message_comp}</td>
                    <td>{Complaints.location_of_complaint}</td>
                    <td className="fw-semibold">{Complaints.type_of_complaint}</td>
                    <td>{Complaints.date_of_filing}</td>
                    <td>{Complaints.time_of_filing}</td>
                    <td>{Complaints.resident_id}</td>
                    <td className="fw-bolder">{Complaints.status_msg}</td>
                    {/* <td>{Complaints.status_info_id}</td> */}
                    <td>
                      
                      <Respondbtn Complaints={Complaints} />
                      
                    </td>
                </tr>
            )
            )
            }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default ResToComp