
import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home';
import ProductDetail from './pages/ProductDetail';
import AllProducts from './pages/AllProducts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Admin from './pages/Admin';

const App = ()=>{
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products/" element={<AllProducts/>}/>

        <Route exact path="/product/:pid" element={<ProductDetail/>}/>
        <Route exact path="/admin" element={<Admin/>}/>


      </Routes>

      <Footer/>
     

    </Router>

  )

}


export default App;