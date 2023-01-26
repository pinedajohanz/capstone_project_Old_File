import {NavbarBootstrap} from "../components/Navbarbs";
import { ToastContainer, toast, Flip } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import "./Dashboard.css"
import SidebarRes from "../components/SidebarRes";

export default function UserDash() {
  return (
    <>
    {/* <NavbarBootstrap /> */}
      <div className="App">
        <SidebarRes />
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
