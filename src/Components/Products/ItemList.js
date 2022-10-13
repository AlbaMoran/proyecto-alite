import React from "react";
import Item from "./Item";
import { Container, Row } from "react-bootstrap";

const ItemList = ({ listProducts}) => {



  return (
    
      <Container className='' >
        <Row style={{ justifyContent:'center'}} className="container mx-auto ms-1">
          {listProducts.map((item, i) => (
          
            <Item key={`${item.name}-${i}`} item={item}  />
           
          ))}
        </Row>
      </Container>
   
  );
};

export default ItemList;
