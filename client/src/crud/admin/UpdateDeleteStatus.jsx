import React, { useState, useEffect } from 'react'
import "../../dashboard/Dashboard.css"
import SideBarAdmin from "../../components/SideBarAdmin";
import Updatebtn from '../Updatebtn';
import { ToastContainer, toast, Flip } from 'react-toastify'; 

function UpdateDeleteStatus() {
  // toastify notification
  const notify = () => {
    toast.warning("Complaint Deleted!")
}
  // setting the inputs
  const [AllComp, setAllComp] = useState([]);

  // DELETE Complaint function
  async function deleteComp(id) {
    console.log(id)
    try {
      await fetch(`http://localhost:5000/complaint/${id}`,
      {
        method: "DELETE"
      });
      // notification upon delete of complaint
      notify()

      // setState to update the state that hold all complaints, by filtering out the complaint that has just been deleted. if ID != ID passed to the function, it keeps the element in the array and returns a new array without the element that was removed.
      setAllComp(AllComp.filter(Complaints => Complaints.complaints_id !== id))

    } catch (err) {
        console.error(err.message)
    }
  }

  // GET all COMPLAINTS to display in the table
  async function getAllComp() {
    const res = await fetch("http://localhost:5000/allcomplaints");

    // data stored in this Array
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
                <th scope="col">Update status</th>
                <th scope="col">Delete complaint</th>

                </tr>
            </thead>
            <tbody>
            {/* maps over an array to display each item in a row from state */}
            {AllComp.map( Complaints => (
                  <tr key={Complaints.complaints_id}>
                    <td>{Complaints.complaints_id}</td>
                    <td className='fw-semibold'>{Complaints.message_comp}</td>
                    <td>{Complaints.location_of_complaint}</td>
                    <td className='fw-semibold'>{Complaints.type_of_complaint}</td>
                    <td>{Complaints.date_of_filing}</td>
                    <td>{Complaints.time_of_filing}</td>
                    <td>{Complaints.resident_id}</td>
                    <td className='fw-bolder'>{Complaints.status_msg}</td>
                    {/* <td>{Complaints.status_info_id}</td> */}
                    <td>
                      {/* passing a prop to updatebtn component */}
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

export default UpdateDeleteStatus