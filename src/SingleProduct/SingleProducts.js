import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Divider, Rating } from "@mui/material";
import BuyOrder from "../Components/BuyNowBTN";
import "../SingleProduct/SingleProducts.css";



export default function SingleProduct() {
    const { id } = useParams();
    // console.log(id)
    const [singleData, setSingleData] = useState();
    console.log(singleData)
    useEffect(() => {
        getData();
    }, [])


    const getData = async () => {
        let response = await fetch(`http://localhost:4000/v1/allProductsDetails?id=${id}`);
        let data = await response.json();
        // console.log(data)
        setSingleData(data.data[0]);
    }

    return (
        <>
            <Container className="SP-container " style={{ marginTop: "14px", padding: '5rem' }}>
                <Row>
                    <Col lg={8}>
                        {
                            singleData === undefined ? null
                                :
                                <>
                                    <div className="grid grid-two-column" style={{ display: 'flex', justifyContent: 'center', borderStyle: 'ridge', height: '24rem' }}>
                                        <img src={singleData.pictures}></img>
                                    </div>
                                </>
                        }
                    </Col>

                    <Col lg={4} className="bg-light">
                        {
                            singleData === undefined ? null
                                :
                                <>
                                    <div className="product-data">
                                        <h4 style={{ paddingTop: "3rem" }}>{singleData.name}</h4>
                                        {/* <Divider /> */}
                                        <hr />

                                        <div style={{ display: "flex", gap: "15px" }}>

                                            <Rating name="read-only" value={singleData.rating} readOnly />
                                            <p>{singleData.rating}</p>
                                        </div>

                                        <div>
                                            <p style={{ paddingTop: "0.6rem" }}>{singleData.description} </p>
                                        </div>
                                        <p style={{ paddingTop: "0.6rem" }} className="single-price"> ₹ {singleData.price} </p>

                                        <Button className="SP-btn" style={{ backgroundColor: '#832f37', alignItems: 'center', display: 'flex', justifyContent: 'center', width: '100%', transition: 'background-color 2.3s', color: "white" }} variant="contained" size="small">
                                            
                                        <BuyOrder/>

                                        </Button>
                                    </div></>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}


