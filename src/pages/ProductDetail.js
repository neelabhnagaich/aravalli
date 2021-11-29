import React,{useEffect,useState} from 'react';

import { useParams } from "react-router-dom";
import Loader from '../components/Loader';
import Modal from '../components/Modal';

import cloth1 from '../resource/cloth1.jpg'

import { projectFirestore} from "../firebase/config";

const ProductDetail = ()=>{
  const {pid} = useParams()
  const[url,setUrl]  = useState([])

  const [current, setcurrent] = useState("")

  const [loading, setLoading] = useState(false)

  const [modalImage , setModalImage] = useState(null)

  useEffect(()=>{

    console.log(pid);
    setLoading(true)
    const user = projectFirestore.collection("images").doc(pid).get()
    .then(documentSnapshot => {
      console.log(documentSnapshot.data().urlsLst)
      setUrl(documentSnapshot.data().urlsLst)
      setcurrent(documentSnapshot.data().urlsLst[0])

      setLoading(false)
    
    })
    
    
  },[])


  if(loading){
    console.log("spinner");
    return <Loader />
}


  return(
  <div>
     <div class="product-section container">
       <div class="sm-imgs-list" id="a">
       

       {url.map((path)=>(

         <img class="sm-img" src={path} alt="Flowers in Chania"  onClick={()=>{setcurrent(path)}}/>
       ))}


         </div>
         <div class="product-section-current" id="b">
         <img  src={current} alt="Flowers in Chania" onClick={()=>setModalImage(current)}/>
         </div>
        
        <div class="product-detail container" id="c">
          <div>
          <h2>Womens top</h2>
          <h5>Rs. 999.00</h5>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus.</p>
          </div>
          <div class="product-btn-section">
          <a class="btn btn-custom btn-visible">Buy it on Amazon</a>
          <a class="btn btn-custom btn-visible">Buy it on Meesho</a>
          </div>

        </div>
                  
    </div>

    <div class="container also-like-section">
        <h2 class="text-center" >You may also Like</h2>



    </div>

      {modalImage && <Modal modalImage={modalImage} setModalImage={setModalImage} /> }

    </div>
    

  )

}


export default ProductDetail;