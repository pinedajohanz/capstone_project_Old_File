import React, { useState, useEffect } from 'react'
import "../../dashboard/Dashboard.css"
import SideBarAdmin from "../../components/SideBarAdmin";
import Updatebtn from '../Updatebtn';

function UpDelPage() {
  const [AllComp, setAllComp] = useState([]);

  // delete Complaint function
  async function deleteComp(id) {
    console.log(id)
    try {
      await fetch(`http://localhost:5000/complaint/${id}`,
      {
        method: "DELETE"
      });

      setAllComp(AllComp.filter(Complaints => Complaints.complaints_id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }


  async function getAllComp() {
    const res = await fetch("http://localhost:5000/allcomplaints");

    const AllCompArray = await res.json();
    
    // converts date format to MM/DD/YYYY
    AllCompArray.forEach(complaints => {
      complaints.date_of_filing = (new Date(complaints.date_of_filing)).toLocaleDateString()
    }); 
    
    setAllComp(AllCompArray);
  }

  useEffect(() => {
    getAllComp();
  }, []);

  return (
    <>
    <SideBarAdmin />
    <div className="container-table m-5">
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
                <th scope="col">0 = IN-PROGRESS / 1 = COMPLETED</th>
                <th scope="col">Update status</th>
                <th scope="col">Delete complaint</th>

                </tr>
            </thead>
            <tbody>
            {AllComp.map( Complaints => (
                  <tr key={Complaints.complaints_id}>
                    <td>{Complaints.complaints_id}</td>
                    <td>{Complaints.message_comp}</td>
                    <td>{Complaints.location_of_complaint}</td>
                    <td>{Complaints.type_of_complaint}</td>
                    <td>{Complaints.date_of_filing}</td>
                    <td>{Complaints.time_of_filing}</td>
                    <td>{Complaints.resident_id}</td>
                    <td>{Complaints.status_msg}</td>
                    <td>{Complaints.status_info_id}</td>
                    <td>
                      <Updatebtn Complaints={Complaints} />
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={() => deleteComp(Complaints.complaints_id)} >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
            }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default UpDelPage