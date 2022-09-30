import React, { useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";




export const ItemCount = ({item, stock, initial, onAdd }) => {


  const [count, setCount] = useState(0);
  const addItemCart = () =>  ( count < stock) &&  setCount(count + 1);
  const subtractItem = () => ( count > initial) &&   setCount(count - 1);
  
  const addCart = () => {
    if(count > 0){
      
      onAdd( count)
      setCount(1)
    } ;
  }
  
  return (
    <>
      <div className="container"  style={{userSelect: "none", justifyContent:"center", alignItems: "center"   }}>

   
        <Card.Body >
          <ListGroup className="list-group-flush" style={{ justifyContent:"center", alignItems: "center" }}>
            <ListGroup.Item >
              <ButtonGroup aria-label="Basic example"  >
                <Button variant="secondary" disabled={ count === initial} onClick={subtractItem}>
                  -
                </Button>
                <Button variant="secondary"> {count} </Button>
                <Button variant="secondary"  disabled ={ count === stock} onClick={addItemCart}>
                  +
                </Button>
              </ButtonGroup>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button variant="outline-success outline-warning" onClick={addCart}>
                Agregar a Carrito
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
   
      </div>
    </>
  );
};

export default ItemCount;
