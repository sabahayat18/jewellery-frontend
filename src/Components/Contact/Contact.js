import React from "react";
import "../Contact/Contact.css";
import { Container, Row, Col } from 'react-bootstrap';
import ContactCard from "./card";
import ModelForm from "./contactModel";

const Contact = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="map mt-3">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0549235179747!2d88.43037367362268!3d22.57704903281043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275e65b8ac97d%3A0xda5ab466d776fd31!2sRed%20Apple%20Learning!5e0!3m2!1sen!2sin!4v1694431077683!5m2!1sen!2sin" width="102%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Col>
                    <Col className="contact-para" lg="6"> <h3>CONTACT US</h3>
                        <p>If you need any support, our team of experts is available to help answer all your questions: from assistance with your orders to style advice and gift ideas. Feel free to contact us, we are here for you.
                            If you need any support, our team of experts is available to help answer all your questions: from assistance with your orders to style advice and gift ideas. Feel free to contact us, we are here for you.
                        </p>
                    </Col>
                </Row>
            </Container>
            
            <Container>
                <Row className="mt-4">
                    <Col lg="6 mt-4">
                        {/* <Col lg="4 mt-4"> */}
                        <ContactCard
                            title="CALL US"
                            text="General Enquiries<br />11.30am – 11.30pm from Monday to Sunday<br /> <br />☎️ +91 7272828242"
                        />                   
                    </Col>

                    <Col lg="6 mt-4" >
                        <ContactCard title="E-MAIL US"
                            text="A Indian Gems
                             ambassador will respond as soon as possible."> <br/>{<ModelForm style={{ textDecoration: "none", marginTop: "2px" }} />}</ContactCard>

                    </Col>
                </Row>
            </Container >
        </>

    );
};

export default Contact;