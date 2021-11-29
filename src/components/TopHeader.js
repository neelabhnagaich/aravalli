
import React from 'react';
import { Link } from 'react-router-dom';



const TopHeader = ()=>{
  return(
    
    <div class="topHeader">
        <div class="topHeader-content container">
            <h1>Aravalli Clothings</h1>
            <p>Best clothing at affordable price</p>
            <Link to="/products" class="btn btn-custom">Buy Now </Link>

        </div>
    </div>
   
  )

}


export default TopHeader;