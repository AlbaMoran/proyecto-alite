import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../../Components/styleSheets/Item.css";
import '../styleSheets/Item.css'
import Ico from '../../../src/assets/images/Logos/Alite.ico'


const Item = ({ item }) => {

  
  return (
    <>
 
      <Card
        className=" 
        justifyContent-center
        bg-opacity-10 
        border-dark 
        border-opacity-25 
        rounded-4 
        shadow 
        col-lg-3 col-md-3 col-sm-5 col-xs-12
        my-2 mx-2 "
        style={{ userSelect: "none" }}
        key={item.id}
      >
        <Card.Body>
          <div style={{textAlign:'start'}}>
            <img src={Ico} alt='ico' />
            <br/>

          </div>
          <Card.Img variant="top" src={item.image} alt={item.name} style={{ width: "70%", userSelect: "none" }}
          />
          <h6 className="card-text">{item.categoryName}</h6>
          <div
            className="bg-light bg-opacity-10  border border-secondary border-top-0 border-end-0 border-start-0 p-1"
            style={{ justifyContent: "space-evenly" }}
          >
           
            <h5 className=" text-center ">
              <b>{item.name}</b>
            </h5>
          </div>
         
                     
            <h5 className="card-text"> ${item.price}</h5>
            <h6 className="card-text"> {`Stock: ${item.stock} unidades`}</h6>
         
        </Card.Body>
       
        <Card.Body>
          <Accordion defaultActiveKey="1" style={{ borderColor: "cadetblue" }}>
            <Accordion.Item
              eventKey="0"
              style={{ backgroundColor: "aliceblue" }} >
              <Accordion.Header>Ingredientes</Accordion.Header>
              <Accordion.Body>{item.detail}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
         
            <Link to={`/item/${item.id}`} className='btn btn-secondary d-block mt-2 '> Ver más detalles</Link>
   
           
        </Card.Body>


      </Card>
   
    </>
  );
};

export default Item;
