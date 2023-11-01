import React from 'react';
import "../About/About.css";
import { Container, Row, Col } from 'react-bootstrap';


const About = () => {
    return (

        <Container >

            <Row>
                <Col>

                    <div className='aboutRow'>
                        <h3 className='heading1' style={{ textAlign: "center", fontFamily:"sans-serif" }}><b>About Us</b></h3>

                        <p className='paragraph mb-5' style={{fontFamily:"sans-serif"}}>Every journey has a beginning, <b>Indian Gems </b>
                            in 1939 and grew to be India's one of the largest jewellery house with a legacy of over eight decades. The founder, <b>Saba Hayat’s </b>  vision and passion for creating bold and legendary jewellery designs, has been able to carve a way for the company to establish trust amongst its customers for generations now.
                            <br /> <br />
                            The Brand is known for its timeless craftsmanship, contemporary designs and exceptional product quality. With the roots in Kolkata, Indian Gems
                            have 62 showrooms located across 8 cities of India like - Agartala, Bhubaneswar, Delhi, Noida, Bangalore, Jamshedpur, Mumbai, Ranchi and have footprints across multiple locations in West Bengal. Further, crossing over geographical boundaries,Indian Gems
                            caters to a diverse category of consumers through its Omnichannel approach.</p>
                    </div>
                </Col>
            </Row>
           

            <Row>
                <h3 style={{ textAlign: 'center', fontFamily:"sans-serif" }}
                    className="brand-story"><b>The Brand Story</b></h3>
                <Col className='col1-About mb-5' lg='6' >
                    <div className="content-image-container ">

                        <div className="content" style={{fontFamily:"sans-serif"}}>
                            <h3 >Every journey has a beginning, Indian Gems in 1939 and grew to be India's one of the largest jewellery house with a legacy of over eight decades.</h3><br />
                            <p>
                                The founder, Saba Hayat’s vision and passion for creating bold and legendary jewellery designs, has been able to carve a way for the company to establish trust amongst its customers for generations now.</p>
                        </div>
                    </div>
                </Col>

                <Col className='col2-about mb-5' lg='6'>  
                    <div className="image">
                        <img src="https://pcchandraindia.com/public/frontend/assets/img/newhome/story-min.jpg" alt="No Image" />
                    </div>
                </Col>
            </Row>
        </Container>


    );
};

export default About;

