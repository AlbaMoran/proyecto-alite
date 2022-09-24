import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import products from "../../assets/database/products";
import { customFetch } from "../../utilities/customFetch";



function ItemListContainer( { categoryName } ) {
  
  const [listProducts, setListProduct] = useState([]);
  const [status, setStatus] = useState(false)
  

  // useEffect(() => {
  //   customFetch(products)
  //     .then((data) => {
  //       setListProduct(data);
  //       setStatus(`none`);
  //       // console.log(data);
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // }, []);

  useEffect( () => {
    const productsByCategory = async () => {
      try {
       const fetch = await customFetch(products)
       const response= fetch.filter(product => product.categoryName === categoryName)
       setListProduct(response)
       setStatus(true);
       
      } 
      catch (error) {
        console.error("este es el error", error);
      }
    }
    productsByCategory()
 
  },[categoryName])

 

  return (
    <>
   { listProducts.length >0 ?
     <h3 >  {categoryName} </h3>
     : null}


{
     status 
     ?
      <ItemList listProducts={listProducts}  />
     :
      <div  >
        <div className="d-flex justify-content-center my-2 ">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"> </span>
          </div>
            <span> Cargando ...</span>
        </div>
      </div>}
    </>
  );
}

export default ItemListContainer;
