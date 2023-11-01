import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Navbarc from "./Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Login from "./LogIN-SignIN/Login";
import SignIn from "./LogIN-SignIN/SignIn";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Diamond from "./Diamond/Diamond";
import Gold from "./Gold/Gold";
import Silver from "./Silver/Silver";
import SingleProduct from "./SingleProduct/SingleProducts";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbarc/>
      
        <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>                   
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Signin" element={<SignIn/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/SingleProduct/:id" element={<SingleProduct/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Diamond" element={<Diamond/>}></Route>
          <Route path="/Gold" element={<Gold/>}></Route>
          <Route path="/Silver" element={<Silver/>}></Route>
         
        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </>
  )
}

export default App