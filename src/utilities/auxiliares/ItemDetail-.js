import React, { useState, useContext } from 'react'
import {Link } from 'react-router-dom'
import { Card, Carousel } from 'react-bootstrap';
import ItemCount from '../../Components/Products/ItemCount';
import '../../Components/styleSheets/ItemDetail.css'
import swal from "sweetalert";
import { Context } from '../../cartContext/CartContext';


const ItemDetail = ({ item }) => {
  const [add, setAdd] = useState(false)
  const { addProduct } = useContext(Context)
  

  const onAdd = (quantity) => {
    addProduct(item, quantity);
    swal({
      title: `Se agregó ${item.quantity} correctamente al carrito`,
      icon: "success",
      button: "Aceptar",
      timmer: "2000",
    });
    setAdd(!add);
  };


  return (
  
    <>
      <div className='container mt-5'>
   
      <Card
          className=" Container
          flex-wrap-no-wrap
            justifyContent-center
            text-center 
            card p-1 
            bg-light 
            bg-opacity-10 
            border 
            border-dark 
            border-opacity-25 
            rounded-4 
            shadow p-3 
            mb-5 
            bg-body rounded
            col-xs-12   
            my-4 mx-2 auto "
          style={{ userSelect: "none", width: '80%' }}
        >
          <Card.Body>
 
            <Carousel slide={false}>
                <Carousel.Item  >
                  <img
                    className=" w-10 img-fluid"
                    src={item.image}
                    alt={item.name}
                  />
               
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="w-10 img-fluid "
                    src={item.image2}
                    alt="collection"
                  />
                 
                </Carousel.Item>
                <Carousel.Item>
                
                  <img
                    className="w-10 img-fluid"
                    src={item.image3}
                    alt="stack"
                  />
               
                </Carousel.Item>
              </Carousel>
            
          </Card.Body>

      

          <div
            className="card-body bg-dark bg-opacity-10  border border-warning border-top-0 border-end-0 border-start-0 p-1"
            style={{ justifyContent: "space-around" }}
          >
            <h5 className="card-title text-center ">
              <b>{item.name}</b>
            </h5>
          </div>
       

     
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
                <div> <h6> <b>¡Añadido!</b></h6>
                 <Link to="/cart" className="btn btn-primary" >Terminar compra  </Link></div>
                  :
                  <ItemCount item= {item} stock={item.stock} initial="1" onAdd={onAdd} />
                  
                  }
             
                <span > {`Stock: ${item.stock} unidades`}</span>
           <br/>
          

           
          </div>
        
     
      </div >
      </Card>
      </div>
    </>
  );
};


export default ItemDetail