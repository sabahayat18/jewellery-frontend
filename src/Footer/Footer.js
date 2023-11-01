import React from 'react';
import "../Footer/Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import img1 from "../../src/Components/ComponentPIC/footer-logo.png";


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className='footer-about'>
                    <img src={img1} />
                    
                    <p>The Brand is known for its timeless craftsmanship, contemporary designs and exceptional product quality..</p>
                </div>
                <div className="footer-social">
                    <h3>Follow us</h3>
                    <div className="social-icons">
                        <div>
                            <a href="https://www.facebook.com" target="_blank">
                                <FaFacebookF className='icons' />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com" target="_blank">
                                <FaInstagram className='icons' />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.twitter.com" target="_blank">
                                <FaTwitter className='icons' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='footer-contact'>
                    <h3>Call Us</h3>
                    <h3>☎️ +91 7272828242</h3>
                </div>
            </div>
            <div className='footer-bottom-section'>
                <hr/>
                <div className='container'>
                    <p>&copy;{new Date().getFullYear()} Indian Gems. All Rights Reserved</p>
                </div>
                <div>
                    <p>PRIVACY POLICY</p>
                    <p>TERMS & CONDITIONS</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


