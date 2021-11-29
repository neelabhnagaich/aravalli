
import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ()=>{
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light container">
    <div class="container-fluid">
      
      <Link to="/" class="navbar-brand" >Aravalli</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          
          <Link to="/" class="nav-link active" aria-current="page">Home</Link>
          <Link to="/products/" class="nav-link">Products</Link>
          <a class="nav-link" href="#about">About</a>
        </div>
      </div>
    </div>
  </nav>

  )

}


export default Navbar;