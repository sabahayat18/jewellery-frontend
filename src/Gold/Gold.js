import React from "react";
import "../Gold/Gold.css";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Frontdisplay from "../Components/FrontDisplay/Frontdisplay";

// Material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from "@mui/material";
import { NavLink } from "react-router-dom";




export default function Gold() {

    const [user, setUser] = useState([]);                                      //All DATA IN USER.
    // console.log(user);

    const [searchText, setSearchText] = useState('');                         //Search Section.

    const [findData, setFindData] = useState([]);                             // My all Data in FindData.
    // console.log(findData);

    const getData = async () => {
        let response = await fetch('http://localhost:4000/v1/selectAllProductsDetails')
        let myData = await response.json();
        let data = myData.data
        setUser(data)
    }

    useEffect(() => {
        getData();
    }, [])


    // Price High-Low section --

    const highest = () => {
        let highestData = [...user].sort((a, b) => b.price - a.price);
        setUser(highestData);
    }

    const lowest = () => {
        let lowestData = [...user].sort((a, b) => a.price - b.price);
        setUser(lowestData);
    }



    const handleData = async (e) => {
        if (e.target.value === 'highest') {
            highest()
        } else if (e.target.value === 'lowest') {
            lowest()
        }
    }

    //Category Section--

    const handleCategory1 = async (e) => {
        const filterBtn = user.filter((i) => {
            return i.name === (e.target.name);
        });
        console.log(filterBtn);
        // setUser(filterBtn);
        setFindData(filterBtn)
    }


    //Search Section--
    const updateSearch = (e) => {                                                          //search section
        setSearchText(e.target.value);
    }

    useEffect(() => {                                                                      //search section
        const filteredData = user.filter((ele) => {
            return ele.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setFindData(filteredData)
    }, [user, searchText])





    return (
        <>
            <Container className="Gold-main-container mt-4">
                <Row>
                    <Col style={{ padding: '1rem' }} lg={9}>

                        <Row>
                            <Col>
                                <Row>
                                    <Col className='d-flex' style={{ height: '100px', width: '100%', justifyContent: 'space-between' }}>

                                        {/* //sort */}

                                        <div className="sort-selection">
                                            <form action="#">
                                                <label htmlFor="sort"></label>
                                                <select name="sort" onChange={handleData}
                                                    id="sort"
                                                    className="sort-selection--style"
                                                    style={{ height: '2rem', color: 'darkgray', borderColor: 'darkgrey', boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)' }} >
                                                    <option value="lowest">Price(lowest)</option>
                                                    {/* <option value='#' disabled></option> */}
                                                    <option value="highest">Price(highest)</option>
                                                </select>
                                            </form>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row className="Gold-row1">
                            {findData.map((e) => {
                                if (e.category_id === 2) {
                                    return (
                                        <Col className="my-3 d-flex" lg={4} style={{ justifyContent: 'center' }}>
                                            <Card className="Card" style={{width:'345px'}}>
                                                <CardMedia
                                                    className="CardMedia"
                                                    sx={{ height: '180px' }}
                                                    image={e.pictures}
                                                    title="jewellery image"
                                                />
                                                <CardContent className="CardContent">
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {e.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {e.description}
                                                    </Typography>
                                                    <Typography variant="h6" style={{ fontWeight: "300px" }}>
                                                        ₹{e.price}
                                                    </Typography>
                                                </CardContent>
                                                <Divider />
                                                <CardActions>
                                                    <Button style={{ backgroundColor: '#832f37', alignItems: 'center', display: 'flex', justifyContent: 'center', width: '100%', transition: 'background-color 2.3s' }} variant="contained" size="small">
                                                        <NavLink style={{textDecoration:"none", color:'white'}} className='Gold-navlink' key={e.id} to={`/SingleProduct/${e.id}`}>
                                                            Buy Now
                                                        </NavLink>
                                                    </Button>
                                                   
                                                </CardActions>
                                            </Card>
                                        </Col>
                                    )
                                }
                                return null;

                            })
                            }

                        </Row>
                    </Col>

                    {/* Filter Section   (Search) */}  
                    <Col className='xyz' style={{ height: '900px', padding: '1rem' }} lg={3}>
                        <div className='filter-search'>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input placeholder='Search' autoComplete='off' type='text' name='text' value={searchText} onChange={updateSearch}
                                    style={{
                                        height: '3rem', padding: '10px',
                                        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
                                        color: 'darkgray',
                                        border: 'solid 0.2px', borderColor: 'darkgrey'
                                    }} />
                            </form>
                        </div>

                        {/* category */}

                        <div className="Gold-category " style={{ display: 'grid', justifyContent: 'left', gap: '25px', paddingLeft: '20px' }}>
                            <h4 className='my-4' style={{ cursor: 'pointer', fontWeight: 400 }} onClick={getData}>CATEGORY</h4>
                            <button className='filter-all-btn' type='button' name='Gold Ring' onClick={handleCategory1}>Ring</button>
                            <button className='filter-all-btn' type='button' name='Gold Earring' onClick={handleCategory1}>Earring</button>
                            <button className='filter-all-btn' type='button' name='Gold Necklace' onClick={handleCategory1}>Necklace</button>
                        </div>

                    </Col>
                </Row>
            </Container>

            <Row>
                <Col>
                    <Frontdisplay />
                </Col>
            </Row>

        </>
    )
}





