import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export default function ModelForm() {

  const [data, setData] = useState(
    {
      username: "",
      email: "",
      message: ""
    }
  )


  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const HandleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, message } = data;

    if (username && email && message) {
      let response = await fetch('http://localhost:4000/v1/insertContactData', {
        method: 'POST',
        headers: {
          'Content-type': "application/json"
        },
        body: JSON.stringify({
          username, email, message
        })
      })
      // setData(response)

      if(response){
        setData({
          username: "",
          email:"",
          message:""
        })
        alert("✅Sent Successfully")
      }else{
        alert("❎Failed to sent")
      }
    }
      else {
        alert('⚠️Please fill the details')
      }
  }


  const handleInputs = async (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({ ...data, [name]: value })

  }


  return (
    <div>
      <Button style={{ color: 'brown' }} onClick={handleOpen}>📧 Send an e-mail</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 500, height: 350 }}>
          <Form >
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>User Name</Form.Label>
              <Form.Control name='username' value={data.username} onChange={handleInputs} type="text" placeholder="Full Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name='email' value={data.email} onChange={handleInputs} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control name='message' value={data.message} onChange={handleInputs} type="text" placeholder="Enter you message" />
            </Form.Group>
          </Form>
          <Button style={{ backgroundColor: "brown", color: "white" }} onClick={HandleSubmit}>Submit</Button>
        </Box>

      </Modal>
    </div>
  );
}
