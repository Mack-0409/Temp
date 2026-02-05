import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import axios from 'axios'

const App = () => {
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition (async pos => {
      const {latitude, longitude} = pos.coords 
      console.log(latitude,longitude);

      const url = `htps://nominatim.openstreetmap.org/reverse?lat=${latitude} &log=${longitude} &format= json`
      try {
        const location = await axios.get(url)
        console.log(location);
      }catch (error) {
        console.log(error);
      }

    })
  }
  useEffect (() => {
    getLocation()
  },[])
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route> 
        <Route path="/products" element={<Products/>}></Route> 
        <Route path="/about" element={<About/>}></Route> 
        <Route path="/contact" element={<Contact/>}></Route> 
        <Route path="/cart" element={<Cart/>}></Route> 
      </Routes>
    </BrowserRouter>

  )
} 

export default App
