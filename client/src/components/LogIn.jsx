import React, { useState } from "react"
import { Link } from "react-router-dom";
import {NavbarBootstrap} from "./Navbarbs"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import axios from "axios";
// import { useHistory } from 'react-router-dom'

export const LogIn = ({ setAuth }) => {
    // const [state, setState] = useState('initial/default value')
    // useState('initial value')
    // setState <- this update the state
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    
     //setting the inputs
    const onChange = (e) => {    //username     : testusername   
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    //deconstructing the username and password variable from the inputs
    // const { username, password } = inputs
    
    // const history = useHistory()


    const onSubmitForm = async (e) => {
        e.preventDefault()
        
    try {
        //making a body object from the values of username and password
        // const body = { username, password }

        //fetch api for POST method
        axios.post("http://localhost:5000/login", formData
        // {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify( body )
        // }
        )
        .then(res => {
            console.log(res)
            if(res.status === 200){
                window.location = '/UserDash'
            }
        })

        //  const parseRes = await response.json();
        //  if (parseRes.token) {
        //      // if username = admin & password = admin, redirect to Admin dashboard (Insert in database admin credentials)
        //      // login successful, redirect to Resident dashboard 
        //      localStorage.setItem("token", parseRes.token)
        //      setAuth(true)
        //  } else {
        //      setAuth(false)
        //      console.log("Something wrong")
        // }
     
    } catch (error) {
        console.log(error.message)
    }
    }

    // const handleChange = (e) => {
    //     if (e.target.name === 'username') {
    //         setUsername(e.target.value);
    //     } else if (e.target.name === 'password') {
    //         setPassword(e.target.value);
    //     }
    // };

    return (
        <> 
        <NavbarBootstrap />
        <div className="form-box d-flex mx-auto my-5">
            <Form onSubmit={onSubmitForm}>
                <h2>Log In</h2>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label column sm={2}>Username</Form.Label>
                            <Form.Control name="username" value={formData.username} onChange={onChange} type="text" placeholder="Jiheon23" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label column sm={2}>Password</Form.Label>
                            <Form.Control name="password" value={formData.password} onChange={onChange} type="password" placeholder="***********" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Link to="/signup">
                    <button className="btn btn-success my-3">
                        Don't have an account yet? Sign Up here!
                    </button>
                </Link>
            </Form>
            
        </div>
        </>
    )
}



{/* <div className="auth-form-container">
            <h2>Log In</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="Jiheon" id="username" name="username"/>
                <label htmlFor="password">Password: </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***********" id="password" name="password"/>
                <button className="btn btn-primary" type="submit">Log In</button>
            </form>
            <button className="btn btn-light my-3" onClick={() => props.onFormSwitch('signup')}>Don't have an account yet? Sign Up here!</button>
        </div> */}