import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import ItemList from "./ItemList";
import products from "../../assets/database/products";
import { customFetch } from "../../utilities/customFetch";
import { Container } from "react-bootstrap"

function ItemListContainer() {
  const [listProducts, setListProduct] = useState([]);
  const [status, setStatus] = useState(`flex`);

  useEffect(() => {
    customFetch(products)
      .then((data) => {
        setListProduct(data);
        setStatus(`none`);
        console.log(data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  console.log(listProducts);

  const onAdd = () => {
    swal({
      title: `Se agregó correctamente al carrito`,
      icon: "success",
      button: "Aceptar",
      timmer: "2000",
    });
  };

  return (
    <Container fluid>
      <div className="container-fluid my-2 ">
      <ItemList listProducts={listProducts} />
      <div style={{ display: status }}>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"> Loading...</span>
          </div>
        </div>
      </div>
    </div>
    </Container >
  );
}

export default ItemListContainer;
