import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";


export default function BuyOrder() {
    const navigate = useNavigate();

    const [data, setData] = useState(
        {
            buyer_name: "",
            buyer_contact: "",
            buyer_address: ""
        }
    )



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const HandleSubmit = async (e) => {
        e.preventDefault();
        const { buyer_name, buyer_contact, buyer_address } = data;

        if (buyer_name && buyer_contact && buyer_address) {
            let response = await fetch('http://localhost:4000/v1/insertBuyerDeatils', {
                method: 'POST',
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify({
                    buyer_name, buyer_contact, buyer_address
                })
            })
            // setData(response)

            if (response) {
                setData({
                    buyer_name: "",
                    buyer_contact: "",
                    buyer_address: ""
                })
                alert("❤️Purchase Successful....!!❤️")
                navigate("/Home");
            } else {
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
        <>
            <Button style={{ backgroundColor: '#832f37', alignItems: 'center', display: 'flex', justifyContent: 'center', width: '100%', transition: 'background-color 2.3s', color: "white",borderStyle:"none" }} onClick={handleShow}>
                BUY NOW
            </Button>

            <Modal show={show}
                onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Buy Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="buyer_name" type='text' value={data.buyer_name} onChange={handleInputs} placeholder="Enter Your Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupContact">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control name='buyer_contact' type='text' value={data.buyer_contact} onChange={handleInputs} placeholder="Enter Your Contact No" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control name='buyer_address' type="text" value={data.buyer_address} onChange={handleInputs} placeholder="Enter Your Address" />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button style={{ backgroundColor: '#832f37', alignItems: 'center', display: 'flex', justifyContent: 'center', width: '100%', transition: 'background-color 2.3s' }} onClick={HandleSubmit}>
                        Submit
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

