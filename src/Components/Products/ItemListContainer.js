import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getDocs, collection   } from 'firebase/firestore';
import { query, where  } from 'firebase/firestore';
import { db } from '../LoginComponents/Firebase'
import { useParams } from 'react-router-dom';
import '../styleSheets/itemlistcontainer.css'

function ItemListContainer() {
  
  const [listProducts, setListProduct] = useState([]);
  const [status, setStatus] = useState(false)
  const {categoryName}= useParams()

  
  useEffect(() => {         
    const queryCollection = collection(db , 'products'); 

    
    if (categoryName) {

        const queryByCategory = query(queryCollection, where('categoryName', '==', categoryName )) 
        getDocs(queryByCategory)
        .then(res => 
        setListProduct(res.docs.map(item => ({ id: item.id, ...item.data() }))),
        setStatus(true))
    }    else {
        getDocs(queryCollection) 
        .then(res => setListProduct(res.docs.map(item => ({ id: item.id, ...item.data() }))),
        setStatus(true))  
    }
}, [categoryName, status ])



  return (

    <div className="category-title">

    {
     status 
     ?
    <div>
     
      <ItemList listProducts={listProducts}  />
      
    </div>
     :
      <div  >
        <div className="d-flex justify-content-center my-2 ">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"> </span>
          </div>
            <span> Cargando ...</span>
        </div>
      </div>}
    </div>
  );
}

export default ItemListContainer;
