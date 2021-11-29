import React from 'react';

import cloth from '../resource/cloth1.jpg'

const Modal = ({modalImage, setModalImage})=>{


  return(
    

<div className="modal-section">
<img  src={modalImage} alt="Flowers in Chania" onClick={()=>setModalImage(null)}/>

</div> 
  )

}


export default Modal;

