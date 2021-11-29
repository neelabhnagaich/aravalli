import React, {useState} from 'react';
import useStorage from '../hooks/useStorage';
import { projectFirestore, projectStorage, timeStamp } from "../firebase/config";


const Admin = ()=>{

  const [file, setFile] = useState([]);
  const [error, setError] = useState(null);
  const [progress, setProgress]  = useState(0);
  const [url, setUrl]  = useState([]);

  const [a, setA]  = useState("");



  const types = ['image/png', 'image/jpg','image/jpeg']

  //const {url, progress} = useStorage(file)
 
  
  

  const changeHandler = (e)=>{

    let selected = e.target.files;
    console.log(selected);
    /*
    if(selected && types.includes(selected.type)){
      setFile(selected)

    }
    else{
      setFile(null)
      setError('Please select a image file')
      console.log("error");

    }
    */
    setFile(selected)
    
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    console.log("submitted");

    if(file){

      const urlsLst = [];

      console.log("file",file.File);
      const promises = [];
      const storageRef = projectStorage.ref();
      Array.from(file).forEach((fil)=>{

        const uploadTask = storageRef.child(fil.name).put(fil);
        promises.push(uploadTask);

        uploadTask.on('state_changed',(snap)=>{

          let percentage = (snap.bytesTransferred / snap.totalBytes ) *100;
          setProgress(percentage)

        },(err)=>{
          setError(err)
      },async ()=>{
       
        const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
        urlsLst.push(downloadURL)
        setA(downloadURL)
          
      })})

      Promise.all(promises)
      .then(() => {
        
        console.log('All files uploaded',a)
        setUrl(urlsLst)
        console.log("URL ->",urlsLst);

        // after getting the url we wanna save the url to database
       
       const collectionRef = projectFirestore.collection('images')
       const createdAt= timeStamp();

       collectionRef.add({
         createdAt,
         urlsLst

       })

       setFile(null)
      }
        )
      .catch(err => console.log(err.code));

       
    
    }


    else{
      console.log("no file selected");

    }

   
        

  }

  return(
    <div>
      {file && 
        <div className="progress-baar" style={{width:progress + '%'}}> 
          
        </div>
       }
     <h1>Admin </h1>
     <form onSubmit={handleSubmit}>
       <input type="file" onChange={changeHandler} multiple />
       <input type="submit" />
       
     </form>

     

    </div>

  )

}


export default Admin;