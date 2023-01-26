import React, { useState, useEffect } from 'react'
import "../../dashboard/Dashboard.css"
import SideBarAdmin from "../../components/SideBarAdmin";

function ViewAllRes() {

  const [AllRes, setAllRes] = useState([]);
  
  async function getAllRes() {
    const res = await fetch("http://localhost:5000/allresidents");

    const AllResArray = await res.json();

    // converts date format to MM/DD/YYYY
    AllResArray.forEach(residents => {
      residents.birthday = (new Date(residents.birthday)).toLocaleDateString()
    }); 
    
    setAllRes(AllResArray);
  }

  useEffect(() => {
    getAllRes();
  }, []);

  console.log(AllRes)

  return (
    <>
    <SideBarAdmin />
    { " " }
    <div className="container-table m-5">
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