import React from "react";
import Item from "./Item";
import { Container, Row } from "react-bootstrap";

const ItemList = ({ listProducts  }) => {
  // console.log(listProducts);

  return (
    
      <Container >
        <Row style={{ justifyContent: "space-around" }} className="container-fluid">
          {listProducts.map((item, i) => (
          
            <Item key={`${item.name}-${i}`} item={item} />
           
          ))}
        </Row>
      </Container>
   
  );
};

export default ItemList;
