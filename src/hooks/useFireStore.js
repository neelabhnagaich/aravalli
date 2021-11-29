import { useEffect, useState } from "react/cjs/react.development";
import { projectFirestore} from "../firebase/config";


const useFireStore = (collection)=>{

    const [doc,setDoc] = useState([])

    useEffect(()=>{
        const unSub = projectFirestore.collection(collection)
        .orderBy('createdAt','desc')
        .onSnapshot((snap)=>{
            let document = []
            snap.forEach((doc)=>{
                document.push({...doc.data(),id:doc.id});
            })

            setDoc(document)
        })

        return ()=> unSub()
    },[collection])
    return {doc};
}

export default useFireStore;

