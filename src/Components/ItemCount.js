import React, { useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AliteTr540x540 from "../assets/images/Logos/AliteTr540x540.png";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(0);

  const addItem = () => {
    if (stock > count) {
      setCount(count + 1);
    }
  };

  const subtractItem = () => {
    if (stock >= count && count > 0) {
      setCount(count - 1);
    }
  };

  const addCart = () => {
    if (count > 0) {
      onAdd({ text: count });
    }
  };

  return (
    <>
      <Card
        className="container"
        style={{ width: "18rem", userSelect: "none" }}
      >
        Detalle de Producto
        <Card.Img variant="top" src={AliteTr540x540} alt="imagen" />
        <Card.Body >
          <ListGroup className="list-group-flush" style={{ justifyContent:"center", alignItems: "center" }}>
            <ListGroup.Item >
              <ButtonGroup aria-label="Basic example"  >
                <Button variant="secondary" onClick={subtractItem}>
                  -
                </Button>
                <Button variant="secondary">{count} </Button>
                <Button variant="secondary" onClick={addItem}>
                  +
                </Button>
              </ButtonGroup>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                variant="outline-success outline-warning"
                onClick={addCart}
              >
                Agregar {count} a Carrito
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemCount;
