import React, { useState } from 'react'

function Updatebtn({ Complaints }) {
    // editNum function
    // console.table(Complaints) // retrieving an object of Complaints
    const editNum = async (id) => {
        try {

            const body = {status_info_id}
            // id = complaints_id???
            const res = await fetch(`http://localhost:5000/updatecomp/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            // console.log(id) // retrieving 1
            window.location = "/UpDelPage"
        } catch (err) {
            console.error(err.message)
        }
    }

    const [status_info_id, setStatus_info_id] = useState(Complaints.status_info_id)
    //console.log(Complaints.status_info_id) // 0, 0, 1, 1 and 0, 0, 1, 1
    //console.log(status_info_id) // retrieves 0, 0, 1, 1
  return (
    <>
        
        <button 
            type="button" 
            className="btn btn-warning" 
            data-bs-toggle="modal" 
            data-bs-target={`#id${Complaints.complaints_id}`}
        >
            Update
        </button>
        {/* id = "id22" */}

        <div className="modal fade" id={`id${Complaints.complaints_id}`} tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 
                    className="modal-title fs-5" 
                    id="ModalLabel"
                >
                    Update Status of Complaint
                </h1>
                <button 
                    type="button" 
                    className="btn-close" 
                    data-bs-dismiss="modal" 
                    aria-label="Close"
                    onClick={() => setStatus_info_id(Complaints.status_info_id)}>
                </button>
            </div>
            <div className="modal-body">
                <p>0 = IN-PROGRESS  ||||||  1 = COMPLETED</p>
                <input 
                type="number" 
                className="form-control" 
                value={status_info_id} 
                onChange={e => setStatus_info_id(e.target.value)} 
                />
            </div>
            <div className="modal-footer">
            <button 
                type="button" 
                className="btn btn-warning"
                onClick={() => editNum(Complaints.complaints_id)}
            >
                Update
            </button>
                <button 
                    type="button" 
                    className="btn btn-secondary" 
                    data-bs-dismiss="modal"
                    onClick={() => setStatus_info_id(Complaints.status_info_id)}
                >
                    Close
                </button>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Updatebtn