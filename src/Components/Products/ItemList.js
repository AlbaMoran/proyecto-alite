import React from "react";

import Item from "./Item";
import { Container, Row } from "react-bootstrap";

const ItemList = ({ listProducts }) => {
  // console.log(listProducts);

  return (
    <div>
      <Container className="container ">
        <Row style={{ justifyContent: "center" }}>
          {listProducts.map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ItemList;
