
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import useFireStore from '../hooks/useFireStore';



import cloth from '../resource/cloth1.jpg'
import cloth2 from '../resource/cloth2.jpg'
import cloth3 from '../resource/cloth3.jpg'
import cloth4 from '../resource/cloth4.jpeg'
import cloth5 from '../resource/cloth5.jpeg'


import Loader from '../components/Loader';


const ProductList = ()=>{

    const [loading, setLoading] = useState(false)

    
    const {doc} = useFireStore('images')
    

    if(doc.length ==0){
        console.log("spinner");
        return <Loader />
    }

  return(
    <div id="product">
        <div class="heading">
            <h2 class='text-center'>Our Gallery of Products</h2>
        </div>
        <div class="product-list container">
        {
       
        doc && doc.slice(0,6).map((docc)=>(
             <div class="card-custom" key={docc.id}>
             <Link to={`/product/${docc.id}`}>
                 <img class="prod-img" src={docc.urlsLst[0]} alt="Flowers in Chania"
                  
                 />
                 </Link>
                 <div class="card-body-custom">
                     <Link to={`/product/${docc.id}`}>
                         <h5 class="card-title text-center">Aravalli Women top</h5>
                     </Link>
                     <h6 class="text-center">&#8377; 400</h6>
                        
                 </div>
             </div>

        ))}
      
        
        </div>
      
    </div>
  )



}


export default ProductList;