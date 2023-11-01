import { Container, Row, Col, Button } from "react-bootstrap";
import { TextField } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import "../LogIN-SignIN/Login_Signin.css";
import { useState } from "react";
import img from "../../src/Components/ComponentPIC/login-logo.png";



function SignIn() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        user_name: "", email: "", password: "", confirmPassword: "", contact: ""
    })
    console.log(user)

    const updateMyData = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { user_name, email, password, confirmPassword, contact } = user;

        if(user_name && email && password && confirmPassword && contact ){
        const response = await fetch("http://localhost:4000/v1/insertRegDetails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_name,
                email,
                password,
                confirmPassword,
                contact
            })
        });
        if(response){
            setUser({
                user_name:"",
                email:"",
                password:"",
                confirmPassword:"",
                contact:""
            })
            alert("✅Sent Successfully")
            navigate("/Login");
          }else{
            alert("❎Failed to sent")
          }
        }
          else {
            alert('⚠️Please fill the details')

          }
      }
    
      


    return (
        <>
            <Container className="logReg-container">
                <Row>
                    <Col lg >
                        <div className="form-div my-5 bg-light" style={{ height: '800px' }}>
                            <img src={img} />
                            <div className="login-div" method="POST">

                                <TextField className="textfield my-3" id="standard-basic"
                                    name="user_name" value={user.user_name}
                                    onChange={updateMyData}
                                    label="full name" variant="standard" /><br />

                                <TextField className="textfield my-3" id="standard-basic"
                                    name="email" value={user.email}
                                    onChange={updateMyData}
                                    label="e-mail" variant="standard" /><br />

                                <TextField className="textfield my-3" id="standard-basic"
                                    name="password" value={user.password}
                                    onChange={updateMyData}
                                    type="password" label="password" variant="standard" /><br />

                                <TextField className="textfield my-3" id="standard-basic"
                                    name="confirmPassword" value={user.confirmPassword}
                                    onChange={updateMyData}
                                    type="password" label="confirm password" variant="standard" /><br />

                                <TextField className="textfield my-3" id="standard-basic"
                                    name="contact" value={user.contact}
                                    onChange={updateMyData}
                                    type="number" label="phone number" variant="standard" /><br />

                                <Button className='mt-5' variant="primary" type="submit" name="signup" value='register' onClick={PostData} >Register</Button><br />

                                <p className="navlink">I have an account?

                                    <NavLink to='/Login' style={{ textDecoration: "none" }}>Already Registered?</NavLink>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SignIn;