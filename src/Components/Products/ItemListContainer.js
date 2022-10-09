import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getDocs, collection   } from 'firebase/firestore';
//import { query, where  } from 'firebase/firestore';
import { db } from '../LoginComponents/Firebase'



function ItemListContainer( { categoryName } ) {
  
  const [listProducts, setListProduct] = useState([]);
  const [status, setStatus] = useState(false)
  

  useEffect( () => {

    
    const queryCollection = collection(db, 'products');
   
    const productsByCategory = async () => {
        try {
          const fetch = await  getDocs(queryCollection)
          const objectCollection = fetch.docs.map(product => ({id: product.id, ...product.data()}))
          
          if(categoryName){
           
           // const response = query(objectCollection, where('categoryName','==', categoryName))
              const response= objectCollection.filter(product => product.categoryName === categoryName)
              setListProduct(response)
              setStatus(true);
            
          } else {
              
            setListProduct(fetch.docs.map(product => ({id: product.id, ...product.data()})))
            
          }
        }
      catch (error) {
        console.error("este es el error", error);
      }
      finally{
        setStatus(true);
      }
    }
     productsByCategory()
      
  },[categoryName])

 

  return (

    <div className="itemlistcontainer">
   { listProducts.length >0 ?
     <h3 >  {categoryName} </h3>
     : null}


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
