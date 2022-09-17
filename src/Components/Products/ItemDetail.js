import React from 'react'
import { Card, Carousel } from 'react-bootstrap';
import ItemCount from './ItemCount';
import addCart from './ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ item }) => {




  return (

    <>
      <div className='container-sm col-md-6 '>

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
          style={{ userSelect: "none" }}
        >
          <Card.Body>
            <div>
              <Carousel slide={false}>
                <Carousel.Item  >
                  <img
                    className=" w-10 fit-content: center"
                    src={item.image}
                    alt={item.name}
                  />
                 
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="w-30"
                    src={item.image2}
                    alt="collection"
                  />
                 
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="w-30"
                    src={item.image3}
                    alt="stack"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Card.Body>

          <hr />

          <div
            className="card-body bg-dark bg-opacity-10  border border-warning border-top-0 border-end-0 border-start-0 p-1"
            style={{ justifyContent: "space-around" }}
          >
            <h5 className="card-title text-center ">
              <b>{item.name}</b>
            </h5>
          </div>
        </Card>

       

        <div className='container-sm' s>
       
            <h6>
              <b>Momento del dia recomendado:</b>
            </h6>
            <p> {item.moment} </p>
            <p> {item.temperature} </p>
            <p> {item.presentation} </p>
         
            <h6><b>Ingredientes</b></h6>
            {item.detail}
         
          <div className="id-Stock">      
          <br/>
            <h6><b>Precio</b>
                <h5 > ${item.price}</h5>
            </h6>
           <ItemCount stock={item.stock} initial="1" onAdd={addCart} />
           <span > {`Stock: ${item.stock} unidades`}</span>
           <br/>
          </div>
        
     
      </div >
      </div>
    </>
  );
};


export default ItemDetail