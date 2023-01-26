// import e from 'express';
import React, { useState } from 'react'

function Respondbtn({ Complaints }) {
    const [message_gov, setmessage_gov] = useState("");
    // how to get complaints id ?
    //console.log(Complaints) // retrieve object goods
    const { complaints_id } = Complaints
    //console.log(complaints_id) // retrieve complaint ID# goods

    // reply function
    const reply = async (e) => {
        e.preventDefault();
        try {

            const body = {message_gov, complaints_id} 

            console.log(body)
            const res = await fetch("http://localhost:5000/response", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

             console.log(res) 
        } catch (err) {
            console.error(err.message)
        }
    }

   
  return (
    <>
        {/* button of modal */}
        <button 
            type="button" 
            className="btn btn-warning" 
            data-bs-toggle="modal" 
            data-bs-target={`#id${complaints_id}`}
        >
            Respond
        </button>
        {/* id = "id22" */}

        {/* Header of inner modal */}
        <div className="modal fade" id={`id${complaints_id}`} tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 
                    className="modal-title fs-5" 
                    id="ModalLabel"
                >
                    Respond to a Complaint
                </h1>
                <button 
                    type="button" 
                    className="btn-close" 
                    data-bs-dismiss="modal" 
                    aria-label="Close"
                >
                </button>
            </div>
            {/* body of inner modal */}
            <div className="modal-body">
                {/* Message to be sent to a complaint */}
                <form onSubmit={reply} className="form-border my-3">
                {/* <h2 className="text-center my-5">Respond to a Complaint</h2> */}
                <label>Reply back to a Complaint:</label>
                <textarea className="form-control my-3" type="text" placeholder="Type here" value={message_gov} onChange={e => setmessage_gov(e.target.value)} />
                {/* Edit: User na naka log in dapat naka-assign automatic sa resident ID below */}
                <label> ID# (AUTO GENERATED)</label>
                <input className="form-control my-3" type="number" placeholder="Complaints ID" value={complaints_id} aria-label="Disabled input example" disabled />
            
            <button className="btn btn-success my-3">Submit</button>
        </form>
                
            </div>
            {/* footer of inner modal */}
            <div className="modal-footer">
            {/* button of inner modal */}
            
                <button 
                    type="button" 
                    className="btn btn-secondary" 
                    data-bs-dismiss="modal"
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

export default Respondbtn