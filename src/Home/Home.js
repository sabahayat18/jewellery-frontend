import React from 'react';
import "../Home/Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import MyCard from '../Components/MyCards/MyCards';
import Frontdisplay from '../Components/FrontDisplay/Frontdisplay';

const Home = () => {
  return (
    <Container fluid>
        <Row>
            <Col style={{margin: '0', padding: '0'}}>
                <div className="main-body">
                    <Carousel>
                        <Carousel.Item>
                            <img
                            style={{ height: "500px"}}
                            className="cardimg1 d-block w-100"
                            src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary/default/dw6b04de2b/homepage/2023/September/IND%20-%20W1/HERO_HEADER_PANTHERE-FIG_V1_2560x996.jpg"
                            alt="First slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                            style={{ height: "500px"}}
                            className="d-block w-100"
                            src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary/default/dw49599ba6/clp/2023/le-voyage/1.%20%20HEADER_MT02_CARTIER_PORTES_2560x996.jpg"
                            alt="Second slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                            style={{ height: "500px"}}
                            className="d-block w-100"
                            src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary/default/dw53079b05/clp/2022/beautes%20de%20monde/01_HEADER_GOLSHIFTEH_BDM_2560x996%20(1).jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Col>
        </Row>

        <Row className='my-5'>
        <h3 className="home-paragraph" style={{fontFamily:'sans-serif'}}>💎Shop Our Creations💎</h3>
      <Col>
      <Container>
          <Row>

               <Col className=' mt-3' lg='4' style={{paddingLeft: '72px'}}>
                 <MyCard img="https://kinclimg7.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIJP0630S197_YAA18PRWHXXXXXXXX_ABCD00-PICS-00004-1024-50566.png" text1="Gold" text2="18KT (750) Yellow Gold and Pearl Earring for Women" text3="Buy Now" Link= "/Gold"/>
            </Col>

            <Col className=' mt-3' lg='4' style={{paddingLeft: '72px'}}>             
                 <MyCard img="https://kinclimg5.bluestone.com/f_webp,c_scale,w_1024,b_rgb:ffffff/product/BIAR0130S18_YAA18DIG6XXXXXXXX_ABCD00-p2-1024.jpg" text1="Diamond" text2="Yellow Gold and Diamond Earring for Women" text3="Buy Now" Link= "/Diamond" />
            </Col>

            <Col className=' mt-3' lg='4' style={{paddingLeft: '72px'}}>                
                 <MyCard img="https://images.cltstatic.com/media/product/350/AE00810-SS0000-pearl-in-the-sea-shell-earrings-in--silver-prd-1-base.jpg" text1="Silver" text2="Silver and Pearl Earring for Women" text3="Buy Now" Link= "/Silver"/>
            </Col>
    </Row>

      </Container>     
          </Col>
            </Row>
            
        <Row>
            <Col>
              <Frontdisplay className="fd mb-5"/>
            </Col>
        </Row>
    </Container>
   
  );
};

export default Home;




























