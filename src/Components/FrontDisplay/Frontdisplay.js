import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



function Frontdisplay() {
    return (
        <>
            <Container style={{ display: 'flex' }}>
                <Row>
                    <h3 style={{ textAlign: 'center', fontFamily: 'sans-serif' , fontSize: "25px",  fontWeight: '500', paddingTop: "15px" }} >💎Shop with Confidence💎</h3>
                    <Col className='col1 mt-3' style={{ textAlign: "center" }}>
                        <div>
                            <img src="https://pcchandraindia.com/public/frontend/assets/img/home/confidence/icon1.png">
                            </img>
                            <p>Handcrafted Jewellery</p>
                        </div>
                    </Col>

                    <Col className='col2 mt-3' style={{ textAlign: "center" }}>
                        <div>
                            <img src="https://pcchandraindia.com/public/frontend/assets/img/home/confidence/icon2.png">
                            </img>
                            <p>100% Certified Jewellery</p>
                        </div>
                    </Col>

                    <Col className='col3 mt-3' style={{ textAlign: "center" }}>
                        <div>
                            <img src="https://pcchandraindia.com/public/frontend/assets/img/home/confidence/icon3.png">
                            </img>
                            <p>Lifetime Exchange & Buyback</p>
                        </div>
                    </Col>

                    <Col className='col4 mt-3' style={{ textAlign: "center" }}>
                        <div>
                            <img style={{ textAlign: "center" }} src="https://pcchandraindia.com/public/frontend/assets/img/home/confidence/icon4.png">
                            </img>
                            <p>Trust of Indian Gems Jewellers</p>
                        </div>
                    </Col>

                    <Col className='col5 mt-3' style={{ textAlign: "center" }}>
                        <div>
                            <img src="https://pcchandraindia.com/public/frontend/assets/img/home/confidence/icon5.png">
                            </img>
                            <p>Over 10 Million Customers</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Frontdisplay;