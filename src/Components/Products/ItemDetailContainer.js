import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {db} from "../LoginComponents/Firebase";
import { getDoc,  doc } from 'firebase/firestore';


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
   
    const params = useParams();
    
                
    useEffect(() => {
      
      const queryDoc = doc(db, 'products', params.id);
      getDoc(queryDoc)
        
      .then((items) => {
                    
       console.log(setItem({id: items.id, ...items.data()}));
        setLoading(false);
      
      })
        
    },[params.id])
  //  console.log("Item desde ItemDetailContainer", item)

  
  return (
    <>
   {
            loading ? 
            <div style={{paddingTop: 100 }}>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
            : 
             <ItemDetail item={item}/>
            }
    </>
  )
}

export default ItemDetailContainer