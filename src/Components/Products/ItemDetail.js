import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import { Card, Carousel, Ratio } from 'react-bootstrap';
import ItemCount from './ItemCount';
import '../../Components/styleSheets/ItemDetail.css'
import swal from "sweetalert";


const ItemDetail = ({ item }) => {
  const [add, setAdd] = useState(false)

  const onAdd = () => {
    swal({
      title: `Se agregó correctamente al carrito`,
      icon: "success",
      button: "Aceptar",
      timmer: "2000",
    });
    setAdd(!add);
  };


  return (
  
 
  
    <>
      <div className='container mt-5'>
   
        <div id='id-Img'><img src={item.image} alt={item.name} className=' img-fluid img-thumbnail id-Img ' id='id-Img'/> </div>
          <div id='id-Img'><img src={item.image2} alt={item.name} className=' img-fluid img-thumbnail id-Img ' id='id-Img' /></div>
          <div id='id-Img'><img src={item.image3} alt={item.name} className=' img-fluid img-thumbnail id-Img ' id='id-Img'  /></div>
      
     
<hr/>
      <div className='row container-sm mt-2' >
       
            <h6>
              <b>Momento del dia recomendado:</b>
            </h6>
            <p> {item.moment} </p>
            <p> {item.temperature} </p>
            <p> {item.presentation} </p>
         
            <h6><b>Ingredientes</b></h6>
           <p> {item.detail}</p>
          <div className="id-Stock">      
          <br/>
            <h6><b>Precio</b>
                <h5 > ${item.price}</h5>
            </h6>
            
              { add 
                  ? 
                 <h6> <b>¡Añadido!</b></h6>
                  :
                  <ItemCount stock={item.stock} initial="1" onAdd={onAdd} />
                  }
                <span > {`Stock: ${item.stock} unidades`}</span>
           <br/>
           <Link to="/cart" className="btn btn-primary">Terminar compra  </Link>
          </div>
        
     
      </div >
      </div>
    </>
  );
};


export default ItemDetail