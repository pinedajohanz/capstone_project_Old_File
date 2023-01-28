import React, { useState, useEffect } from 'react'
import "../../dashboard/Dashboard.css"
import SideBarAdmin from "../../components/SideBarAdmin";

function ViewAllRes() {

  const [AllRes, setAllRes] = useState([]);
  
  // get all residents information to display in the table
  async function getAllRes() {
    const res = await fetch("http://localhost:5000/allresidents");

    // data stored in this Array
    const AllResArray = await res.json();

    // converts date format to MM/DD/YYYY
    AllResArray.forEach(residents => {
      residents.birthday = (new Date(residents.birthday)).toLocaleDateString()
    }); 
    
    // data transfer from array to setState then map it at table
    setAllRes(AllResArray);
  }

  // called after the component renders, if the [depend] have not changed, the effect will not run again.
  useEffect(() => {
    getAllRes();
  }, []);


  return (
    <>
    <SideBarAdmin />
    <div className="container-table m-5 text-bg-light">
        <table className="table table-bordered border-success table-hover">
            <thead>
                <tr>
                <th scope="col">ID#</th>
                <th scope="col">First Name</th>
                <th scope="col">Middle Initial</th>
                <th scope="col">Last name</th>
                <th scope="col">Birthday</th>
                <th scope="col">Subdivision</th>
                <th scope="col">House Street</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Email</th>

                </tr>
            </thead>
            <tbody>
                {/* maps over an array to display each item in a row from state */}
                {AllRes.map(Resident => (
                  <tr>
                    <td>{Resident.resident_id}</td>
                    <td>{Resident.first_name}</td>
                    <td>{Resident.middle_init}</td>
                    <td>{Resident.last_name}</td>
                    <td>{Resident.birthday}</td>
                    <td>{Resident.subdivision_address}</td>
                    <td>{Resident.house_street_address}</td>
                    <td>{Resident.contact_number}</td>
                    <td>{Resident.email_address}</td>
                  </tr>
                ))

                }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default ViewAllRes