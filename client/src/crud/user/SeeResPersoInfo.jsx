import React, { useState, useEffect } from 'react'
import "../../dashboard/Dashboard.css"
import SidebarRes from "../../components/SidebarRes";

function SeeResPersoInfo() {
  // get user's resident_id from local storage of browser 
  const resident_id = localStorage.getItem('user.resident_id')

  const [PersoInfo, setPersoInfo] = useState([]);
  
  async function getPersoInfo() {
    // API needs a resident_id to get the personal info of that user
    const res = await fetch(`http://localhost:5000/allresidents/${resident_id}`);

    const PersoInfoArray = await res.json();

    // converts date format to MM/DD/YYYY
    PersoInfoArray.forEach(residents => {
      residents.birthday = (new Date(residents.birthday)).toLocaleDateString()
    }); 
    
    setPersoInfo(PersoInfoArray);
  }

  useEffect(() => {
    getPersoInfo();
  }, []);

  return (
    <>
    <SidebarRes />
    <div className="container">
      

    {PersoInfo.map(Info => (
      <div className="col-md-8 border border-success">
                <div className="card-body p-4">
                  <h6>My Profile</h6>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>User ID#</h6>
                      <p className="text-muted">{Info.resident_id} </p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>First Name</h6>
                      <p className="text-muted">{Info.first_name} </p>
                    </div>
                  </div>
                  
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Middle initial</h6>
                      <p className="text-muted">{Info.middle_init} </p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Last Name</h6>
                      <p className="text-muted">{Info.last_name} </p>
                    </div>
                  </div>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Birthday</h6>
                      <p className="text-muted">{Info.birthday} </p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Contact Number</h6>
                      <p className="text-muted">{Info.subdivision_address} </p>
                    </div>
                  </div>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Subdivision</h6>
                      <p className="text-muted">{Info.house_street_address} </p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>House Street</h6>
                      <p className="text-muted">{Info.contact_number} </p>
                    </div>
                  </div>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Email</h6>
                      <p className="text-muted">{Info.email_address} </p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Username</h6>
                      <p className="text-muted">{Info.username} </p>
                    </div>
                  </div>
                </div>
        </div>
      ))}
        {/* <table classNameName="table table-striped table-hover">
            <thead>
                <tr>
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
                <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>0999743342</td>
                <td>@last</td>
                </tr>
            </tbody>
        </table> */}
    </div>
    </>
  )
}

export default SeeResPersoInfo