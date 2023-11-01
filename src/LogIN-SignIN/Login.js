import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { Divider, TextField } from "@mui/material";
import "../LogIN-SignIN/Login_Signin.css";
import { useState } from "react";
import img from "../../src/Components/ComponentPIC/login-logo.png";


function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "", password: ""
    });

    console.log(data)

    const updateData = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({ ...data, [name]: value })
    }

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:4000/v1/insertLoginDeatils", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        });

        const responseData = await res.json();
        console.log(responseData)

        if (responseData.err) {
            window.alert("Invalid Password");
        } else {
            window.alert("Password Successful");
            navigate("/");
        }
    };

    return (
        <>
            <Container className="logReg-container">
                <Row>
                    <Col lg >
                        <div className="form-div my-5 bg-light">
                            <img src={img} />

                            <div className="login-div" method="POST">

                                <TextField className="textfield my-3" id="standard-basic"
                                    name="email" value={data.email}
                                    onChange={updateData}
                                    placeholder="e-mail" variant="standard" /><br />

                                <TextField className="textfield my-3" id="standard-basic"
                                    name="password" value={data.password}
                                    onChange={updateData}
                                    type="password" placeholder="password" variant="standard" /><br />

                                <Button className='mt-5' onClick={loginUser}>Log-In</Button><br />

                                <Divider className="my-5" />
                                <p>Don't have an account?
                                    <NavLink to='/SignIn' style={{ textDecoration: "none" }}>Register Now</NavLink>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login;
