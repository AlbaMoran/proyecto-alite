import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import products from "../../assets/database/products";
//import { customFetch }  from "../../utilities/customFetch"
import { getDoc, getFirestore, doc } from 'firebase/firestore';


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = products
    const params = useParams();
    console.log(params);
    console.log("url desde IDC", url )
                
    useEffect(() => {
      const queryFb= getFirestore()
      const queryDoc = doc(queryFb, 'products', params.id);
      getDoc(queryDoc)
        
      .then((items) => {
       
               // const itemid = items.find(item => item.id === Number(params.id)) 
       console.log(setItem({id: items.id, ...items.data()}));
        setLoading(false);
      
      })
        
    },[params.id])
    console.log("Item desde ItemDetailContainer", item)

  
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