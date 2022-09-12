import React from "react";
import ItemCount from "./ItemCount";
import { Accordion, Card } from "react-bootstrap";
import swal from "sweetalert";

//import '../../assets/styles/App.css'

const Item = ({ item }) => {
  const onAdd = () => {
    swal({
      title: `Se agregó correctamente al carrito`,
      icon: "success",
      button: "Aceptar",
      timmer: "2000",
    });
  };

  return (
    <>
      <Card
        className=" 
        justifyContent-center
        text-center 
        p-1 
        bg-light 
        bg-opacity-10 
        border 
        border-dark 
        border-opacity-25 
        rounded-4 
        shadow p-3 
        mb-5 
        bg-body rounded
        col-xs-12 col-sm-4 col-md-4  
        my-2 mx-2 auto "
        style={{ userSelect: "none" }}
        key={item.id}
      >
        <Card.Body>
          <Card.Img
            className=""
            src={item.image}
            alt={item.name}
            style={{ width: "80%", userSelect: "none" }}
          />
          <hr />

          <div
            className="card-body bg-dark bg-opacity-10  border border-info border-top-0 border-end-0 border-start-0 p-1"
            style={{ justifyContent: "space-evenly" }}
          >
            <h5 className="card-title text-center ">
              <b>{item.name}</b>
            </h5>
          </div>
          <div
            className="card-body "
            style={{ justifyContent: "space-around" }}
          >
            <h5 className="card-text"> ${item.price}</h5>
            <h6 className="card-text"> {`Stock: ${item.stock} unidades`}</h6>

            <ItemCount stock={item.stock} initial="1" onAdd={onAdd} />
          </div>
        </Card.Body>
        <Card.Body>
          <h6>
            <b>Momento del dia recomendado:</b>
          </h6>
          <p> {item.moment} </p>
        </Card.Body>
        <Card.Body>
          <Accordion defaultActiveKey="1" style={{ borderColor: "lavender" }}>
            <Accordion.Item
              eventKey="0"
              style={{ backgroundColor: "lavender" }}
            >
              <Accordion.Header>Ver más detalles</Accordion.Header>
              <Accordion.Body>{item.detail}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
